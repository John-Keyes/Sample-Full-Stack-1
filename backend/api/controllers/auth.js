const db = require("../config/dbConnection.js");
const {hashSync, genSaltSync, compareSync} = require("bcrypt");
const {sign, verify} = require("jsonwebtoken");
const {UpdateSetBody, SendEmail} = require("../Helpers/auth");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.headers["Authorization"];
    if (token) {
      // Extract the actual token
      token = token.slice(6);
      verify(token, process.env.token_Key, (err, decoded) => {
        if (err) {
          //Invalid Token
          return res.status(499).json({message: "Error 499: Session Expired."});
        } 
          req.decoded = decoded;
          next();
        
      });
    } else {
      return res.status(498).json({message: "Error 498: Access Denied! Unauthorized User."});
    }
  },
  getAll: async (req, res) => {
    const students = await db.promise().query("SELECT * FROM Students")
    .catch(() => res.status(500).json({message: "Internal Server Error."}));
    const studentsRes = await Promise.all(students[0].map(async student => {
      const gradesAndSkills = await db.promise().query(`SELECT G.grade, S.skill FROM Grades G JOIN Skills S WHERE studentID='${student.studentID}'`);
      const gradeAttributes = await Promise.all(gradesAndSkills[0].map(grade => grade.grade));
      return {...student, grades: gradeAttributes};
    }));
    return res.status(200).json({data: [...studentsRes]});
  },
  create: async (req, res) => {
    let isAdmin = req.body.password == process.env.ADMIN_PWD ? 'T' : 'F';
    let aHash = hashSync(req.body.password, genSaltSync(10));
    //req.body.password = aHash + aHash;
    //SELECT studentID FROM Students WHERE email='${req.body.email}'; 
    const studentIDRes = await db.promise().query(`INSERT INTO Students(studentID, email, password, firstName, lastName, isValidated, isAdmin) OUTPUT Inserted.studentID VALUES (DEFAULT, ${req.body.email}, ${aHash + aHash}, ${req.body.firstName}, ${req.body.lastName}, NULL, ${isAdmin})`)
    .catch(() => res.status(500).json({message: "Error 500: Internal Server Error."}));
    const emailRes = await SendEmail(req.body.email);
    if (!emailRes) {
      return res.status(464).json({message: "Account not Verified, check your email for an access code"});
    }
    return res.status(200).json({studentID: studentIDRes[0].studentID});
    //const studentIDRes = await db.promise().query("SELECT studentID FROM Students");
  },
  login: async (req, res) => {
    let student = await db.promise().query(`SELECT * EXCEPT password FROM Students WHERE email='${req.body.email}'`)
    .catch(() => res.status(500).json({message: "Error 500: Internal Server Error."}));
    if(!student[0]) {
      return res.status(410).json({message: "Error 410: Invalid email"});
    }
    if(!student[0].isValidated) {
      return res.status(464).json({message: "Account not Verified."});
    }
    if(!compareSync(req.body.password, student[0].password)) {
      return res.status(415).json({message: " Error 415: Invalid password"});
    }
    const jwt = sign({student: student[0]}, process.env.token_Key, {algorithm: "HS256", expiresIn: "2h"});
    return res.status(200).json({data: jwt});
    /*if (compareSync(req.body.password, student[0].password) && student[0]) {
      student[0].password = undefined;
      const jwt = sign({student: student[0]}, process.env.token_Key, {expiresIn: "2h"});
      return res.status(200).json({message: "Login successful", data: jwt});
    }*/
  },
  update: async (req, res) => {
    let updateQueryChangedVars = "";
    const studentID = req.params.studentID;
    let average = null;
    UpdateSetBody(body, studentID, average, updateQueryChangedVars);
    await db.promise().query(`UPDATE Students SET ${updateQueryChangedVars} WHERE studentID = '${studentID}'`).then(results => {
      results.password = undefined;
      return res.status(200).json({data: results});
    }).catch(() => res.status(500).json({message: "Error 500: Internal Server Error."}));
  },
  remove: async (req, res) => {
    await db.promise().query(`DELETE FROM Students WHERE studentID='${req.params.studentID}'`).then(res => {
      if (!res) {
        return res.status(420).json({message: "Error 420: Account Not Found"});
      }
      return res.status(200).json();
    }).catch(() => res.status(500).json({message: "Error 500: Internal Server Error."}));
  },
  removeAsAdmin: async (req, res) => {
    if(req.body.password != process.env.ADMIN_PWD) {
      return res.status(497).json({message: "Error 497: Unauthorized Access."});
    }
    await db.promise().query(`DELETE FROM Students WHERE studentID='${req.params.studentID}'`).then(res => {
      if (!res) {
        return res.status(420).json({message: "Error 420: Account Not Found"});
      }
      return res.status(200).json();
    }).catch(() => res.status(500).json({message: "Error 500: Internal Server Error."}));
  }
};