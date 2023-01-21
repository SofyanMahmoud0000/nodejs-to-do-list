const express = require('express')
const app = express()
const APP_CONFIG = require('./config/app')
const connectDB = require('./db/connection')
const taskRouter = require('./routes/Task')

require("./test")

app.use(express.json());

const start = async () => {
  try {
    await connectDB()
    app.listen(APP_CONFIG.PORT, () => {
      console.log(`Server running on port ${APP_CONFIG.PORT}`)
    })
  } catch (error) {
    console.log("Error in starting the app", error)
  }
}



app.use('/api/v1/tasks', taskRouter)

start()