require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  SERVICE_BASEURL: process.env.SERVICE_BASEURL,
  RoutePrefix: process.env.ROUTE_PREFIX,
  API_ACCESS_TOKEN: process.env.API_ACCESS_TOKEN,
  ALLOW_ORIGINS: (process.env.ALLOW_ORIGINS || "*").split(","),
};
