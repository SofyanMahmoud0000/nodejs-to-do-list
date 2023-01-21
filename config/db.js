require('dotenv').config()

const HOST =  process.env.DB_HOST || "localhost"
const PORT =  process.env.DB_PORT || "27017"
const NAME =  process.env.DB_NAME || "db"
const USERNAME = process.env.DB_USERNAME || ""
const PASSWORD = process.env.DB_PASSWORD || ""
const AUTH_SOURCE = process.env.AUTH_SOURCE || "admin"
const CONNECTION_STRING = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${NAME}`


module.exports = {
  HOST,
  PORT,
  NAME,
  USERNAME,
  PASSWORD,
  AUTH_SOURCE,
  CONNECTION_STRING
}