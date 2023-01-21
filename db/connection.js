const DB_CONFIG = require("../config/db")
const mongoose = require('mongoose')


const connectDB = () => {
  mongoose.connect(DB_CONFIG.CONNECTION_STRING, {
    authSource: DB_CONFIG.AUTH_SOURCE
  });
}

module.exports = connectDB