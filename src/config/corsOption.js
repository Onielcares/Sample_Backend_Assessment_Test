const config = require("./index");

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (
      config.ALLOW_ORIGINS.includes("*") ||
      config.ALLOW_ORIGINS.includes(origin)
    ) {
      return callback(null, true);
    }
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};

module.exports = { corsOptions };
