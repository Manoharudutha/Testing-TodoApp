// Connect to postgresql server

const Sequelize = require("sequelize");

const database = "template1";
const username = "postgres";
const password = "mypostgres@2447";

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

/* // Initial connection testing.
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the server is established successfully!");
  })
  .catch((error) => {
    console.error("Unable to connect to server!, Error: ", error);
  });
*/

const connect = async () => {
  return sequelize.authenticate();
};

module.exports = {
  connect,
  sequelize,
};
