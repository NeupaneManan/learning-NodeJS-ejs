const dbConfig = require("../config/dbCofig.js");
const { Sequelize, DataTypes } = require("sequelize");


/*Sequalize laii database ko information provide gareko jun 
chai hamro config folder ko dbConfig vanne file ma xaa*/
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});


//Error handeling Gareko 
sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;//mathi top ma require gareko Sequelize ( notice Big S)
db.sequelize = sequelize;//config garda declare gareko sequelize ( notice Small s)

//importing model files
db.blogs = require("./blogmodel.js")(sequelize, DataTypes);
db.users = require("./userModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done");
});

module.exports = db;
