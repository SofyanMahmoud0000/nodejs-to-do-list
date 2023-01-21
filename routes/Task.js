const express = require('express')
const router = express.Router()

const {
  create,
  getAllTasks,
  deleteTask,
  update,
  get,
  complete,
  uncomplete,
  cancel,
  uncancel
} = require("../controllers/Task")


router.route('/').get(getAllTasks).post(create)
router.route('/:id').get(get).delete(deleteTask).patch(update)
router.route('/:id/complete').patch(complete)
router.route('/:id/uncomplete').patch(uncomplete)
router.route('/:id/cancel').patch(cancel)
router.route('/:id/uncancel').patch(uncancel)

module.exports = router