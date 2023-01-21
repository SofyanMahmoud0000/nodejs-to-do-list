require("dotenv").config()

module.exports = {
  NAME: process.env.APP_NAME || "app",
  PORT: process.env.APP_PORT || "3000",
  AUTHOR_NAME: process.env.AUTHOR_NAME || ""
}