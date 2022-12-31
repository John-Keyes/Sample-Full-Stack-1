const {Average} = require("./calculations.js");
const nodemailer = require("nodemailer");

const Average = arr => {
  let sum = 0;
  arr.forEach(grade => sum += grade); 
  return sum / arr.length;
}

module.exports = {
      SendEmail: async (email) => {
        //let service = GetService(email);
        const mailNetwork = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.emailUser,
                pass: process.env.emailPwd
            }
        });

        const options = {
            //from: "",
            to: email,
            subject: "SFS1 - Confirm your Account.",
            html: "<a href=http://localhost:3030/Auth/Validation ><h1>Confirm your account</h1></a>"
        }

        return mailNetwork.sendMail(options, (error, info) => {
            if(error) {
                console.log(error);
                return false;
            }
            console.log(info.response);
            return true;
        });
    },
    UpdateListTable: async (array, tableName, attribute, studentID) => {
        const getAttributesofID = await db.promise().query(`SELECT ${attribute} FROM ${tableName} WHERE studentID='${studentID}'`);
        const attributesOfID = await Promise.all(getAttributesofID.map(async student => {
          if(!array.includes(student[attribute])) {
            return student[attribute];
          }
          else {
            await db.promise().query(`UPDATE ${tableName} SET ${attribute} = null WHERE ${attribute}='${student[attribute]}'`)
            .catch(() => res.status(500).json({message: "Error 500: Internal Server Error."}));
          }
        }));
        await Promise.all(attributesOfID.map(async element => await db.promise().query(`Call StudentHasThis(${tableName}, ${attribute}, ${studentID}, ${element})`)))
        .catch(() => res.status(500).json({message: "Error 500: Internal Server Error."}));
    },
    UpdateSetBody: (body, studentID, average, updateQueryChangedVars) => {
        //Frontend only sends the changed keys
        for (const key in body) {
          switch(key) {
            case "country":
              updateQueryChangedVars += `country='${body.country}', `;
              break;
            case "state":
              updateQueryChangedVars += `state='${body.state}', `;
              break;
            case "city":
              updateQueryChangedVars += `city='${body.city}', `;
              break;
            case "email":
              updateQueryChangedVars += `email='${body.email}', `;
              break;
            case "password":
              let aHash = hashSync(body.password, genSaltSync(10));
              body.password = aHash + aHash;
              updateQueryChangedVars += `password='${body.password}', `;
              break;
            case "firstName":
              updateQueryChangedVars += `firstName='${body.firstName}', `;
              break;
            case "lastName":
              updateQueryChangedVars += `lastName='${body.lastName}', `;
              break;
            case "grades": 
              UpdateListTable(body.grades, "Grades", "grade", studentID);
              average = Average(body.grades);
              updateQueryChangedVars += `average='${average}', `;
              break;
            case "skills":
              UpdateListTable(body.skills, "Skills", "skill", studentID);
              break;
            case "pic":
              updateQueryChangedVars += `pic='${body.pic}', `;
              break;
          }
        }
        updateQueryChangedVars = updateQueryChangedVars.slice(0, updateQueryChangedVars.length - 2);
    }
}