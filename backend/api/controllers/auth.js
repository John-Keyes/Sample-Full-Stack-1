const db = require("../config/dbConnection.js");
const {hashSync, genSaltSync, compareSync} = require("bcrypt");
const {sign, verify} = require("jsonwebtoken");

const Average = arr => {
  let sum = 0; 
  arr.forEach(grade => sum += grade); 
  return sum / 8;
};

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Extract the actual token
      token = token.slice(6);
      verify(token, process.env.token_Key, (err, decoded) => {
        if (err) {
          //Invalid Token
          return res.status(499).json({errors: {others: "We were not able to log you in."}});
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(498).json({errors: {others: "Access Denied! Unauthorized User"}});
    }
  },
  getAll: async (req, res) => {
    const students = await db.promise().query("SELECT * FROM Students")
    .catch(err => res.status(500).json({errors: "Internal Server Error."}));
    const studentsRes = await Promise.all(students[0].map(async student => {
      const gradesAndSkills = await db.promise().query(`SELECT G.grade, S.skill FROM Grades G JOIN Skills S WHERE studentID='${student.studentID}'`);
      const gradeAttributes = await Promise.all(gradesAndSkills[0].map(grade => grade.grade));
      return {...student, grades: gradeAttributes};
    }));
    return res.status(200).json({data: [...studentsRes]});
  },
  create: async (req, res) => {
    let average = null;
    if(req.body.grades) {
      average = Average(req.body.grades);
    }
    let isAdmin = req.body.password == process.env.ADMIN_PWD ? 'T' : 'F';
    let aHash = hashSync(req.body.password, genSaltSync(10));
    req.body.password = aHash + aHash;
    //SELECT studentID FROM Students WHERE email='${req.body.email}'; 
    const studentIDRes = await db.promise().query(`INSERT INTO Students(studentID, city, company, email, password, firstName, lastName, average, pic, admin) OUTPUT Inserted.studentID VALUES (DEFAULT, ${req.body?.city}, ${req.body?.company}, ${req.body.email}, ${aHash}, ${req.body.firstName}, ${req.body.lastName}, ${average}, ${req.body.pic}, ${isAdmin})`)
    .catch(err => res.status(500).json({errors: {other: "Internal Server Error."}}));
    if(req.body.grades) {
      await Promise.all(req.body.grades.map(async grade => {
        await db.promise().query(`INSERT INTO GRADE(studentID, grades) VALUES (${studentIDRes[0].studentID}, ${grade})`);
      })).catch(err => res.status(500).json({errors: {other: "Internal Server Error."}}));
    }

    if(req.body.skills) {
      req.body.skills.forEach(async skill => {
        await db.promise().query(`INSERT INTO Skills(studentID, skill) VALUES (${studentIDRes[0].studentID}, ${skill})`)
        .catch(err => res.status(500).json({errors: {other: "Internal Server Error."}}));
      });
    }
    res.status(200).json({})
    //const studentIDRes = await db.promise().query("SELECT studentID FROM Students");
  },
  login: async (req, res) => {
    let student = await db.promise().query(`SELECT * FROM Students WHERE email='${req.body.email}'`)
    .catch(err => res.status(500).json({errors: {other: "Internal Server Error."}}));
    if(!student[0]) {
      return res.status(425).json({message: "Invalid email"});
    }
    if(!compareSync(req.body.password, student[0].password)) {
      return res.status(450).json({message: "Invalid password"});
    }
    student[0].password = undefined;
    const jwt = sign({student: student[0]}, process.env.token_Key, {expiresIn: "2h"});
    return res.status(200).json({data: jwt});
    /*if (compareSync(req.body.password, student[0].password) && student[0]) {
      student[0].password = undefined;
      const jwt = sign({student: student[0]}, process.env.token_Key, {expiresIn: "2h"});
      return res.status(200).json({message: "Login successful", data: jwt});
    }*/
  },
  update: async (req, res) => {
    req.body.password = hashSync(req.body.password, genSaltSync(10));
    await db.promise().query(`UPDATE Students SET email='${req.body.email}', username='${req.body.username}', password='${req.body.password}' WHERE id = '${req.body.id}'`).then(results => {
      results.password = undefined;
      return res.status(200).json({
        message: "Updated Successfully",
        data: results
      });
    }).catch(err => res.status(500).json({errors: {other: "Internal Server Error."}}));
  },
  remove: async (req, res) => {
    await db.promise().query(`DELETE FROM Students WHERE studentID='${req.body.id}'`).then(results => {
      if (!results) {
        return res.status(450).json({message: "Record Not Found"});
      }
      return res.status(200).json();
    }).catch(() => res.status(500).json({errors: {other: "Internal Server Error."}}));
  }
};