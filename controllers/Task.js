const Task = require('../services/Task')
const Response = require('../Response/Response')

const create = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(Response.ok(task))
  } catch (e) {
    console.log(e)
  }
}

const getAllTasks = async (req, res) => {
  const tasks = await Task.getAllTasks()
  res.status(200).json(Response.ok(tasks))
}

const update = async (req, res) => {
  const { id } = req.params
  try {
    let task = await Task.update(id, req.body)
    res.json(Response.ok(task))
  } catch (e) {
    console.log("error", e)
  }
}

const get = async (req, res) => {
  console.log("Delete task with id", req.params.id)
  const { id } = req.params
  try {
    const task = await Task.getById(id)
    res.json(Response.ok(task))
  } catch (e) {
    console.log("error", e)
  }
}

const deleteTask = async (req, res) => {
  console.log("Delete task with id", req.params.id)
  const { id } = req.params
  try {
    await Task.deleteTaskById(id)
    res.json(Response.ok(null))
  } catch (e) {
    console.log("error", e)
  }
}

const complete = async (req, res) => {
  const {id} = req.params
  try {
    const task = await Task.complete(id)
    res.json(Response.ok(task))
  } catch (e) {
    console.log("error", e)
  }
}

const uncomplete = async (req, res) => {
  const {id} = req.params
  try {
    const task = await Task.uncomplete(id)
    res.json(Response.ok(task))
  } catch (e) {
    console.log("error", e)
  }
}

const cancel = async (req, res) => {
  const {id} = req.params
  try {
    const task = await Task.cancel(id)
    res.json(Response.ok(task))
  } catch (e) {
    console.log("error", e)
  }
}

const uncancel = async (req, res) => {
  const {id} = req.params
  try {
    const task = await Task.uncancel(id)
    res.json(Response.ok(task))
  } catch (e) {
    console.log("error", e)
  }
}

module.exports = {
  create,
  getAllTasks,
  get,
  deleteTask,
  update,
  complete,
  uncomplete,
  cancel,
  uncancel
}