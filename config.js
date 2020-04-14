const dbUser = "MyMongoDBUser";
const dbPassword = "khurtik1984";

const config = {
  port: 3001,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-ozhmd.mongodb.net/test`,
};

module.exports = config;
