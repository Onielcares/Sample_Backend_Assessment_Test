const mongoose = require('mongoose');
const { uri } = require('./dbConfig');
const logger = require('../../utils/logger');

async function connectDB(callback) {
  try {
    await mongoose.connect(uri);
    logger.info(`Connected to MongoDB: ${uri}`);
    if (callback) callback();
  } catch (err) {
    logger.error('Mongo connection error', err);
    process.exit(1);
  }
}

module.exports = { connectDB };
