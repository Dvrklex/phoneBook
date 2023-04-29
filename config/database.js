const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://dvrklex:dvrklex@127.0.0.1:5432/dvrklex_db', {
  dialect: 'postgres'
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: sequelize, testDbConnection };
