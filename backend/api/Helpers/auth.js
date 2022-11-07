const {Average} = require("./calculations.js");
module.exports = {
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