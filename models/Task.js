const mongoose = require("mongoose")
const {Schema, model} = mongoose

const Task = new Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  create_at: {
    type: Number,
    default: Date.now()
  },
  canceled: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: ""
  }
})

module.exports = model('task1234', Task)