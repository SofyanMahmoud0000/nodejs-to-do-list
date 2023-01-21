const Task = require('../models/Task')

const create = (task) => {
  return Task.create(task)
}

const getAllTasks = async () => {
  return await Task.find({})
}

const deleteTaskById = async (id) => {
  await Task.deleteOne({_id: id})
}

const getById = async (id) => {
  return await Task.findById(id)
}

const update = async (id, body) => {
  let task = await getById(id)
  for(key in body) {
    task[key] = body[key]
  }
  await Task.updateOne({_id: id}, task)
  return await getById(id)
}

const complete = async (id) => {
  return await update(id, {completed: true})
}

const uncomplete = async (id) => {
  return await update(id, {completed: false})
}

const cancel = async (id) => {
  return await update(id, {canceled: true})
}

const uncancel = async (id) => {
  return await update(id, {canceled: false})
}

module.exports = {
  create,
  getAllTasks,
  deleteTaskById,
  getById,
  update,
  complete,
  uncomplete,
  cancel,
  uncancel
}