const express = require('express')
const router = express.Router()
const {
  getGoals,
  getGoalsById,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal).get(getGoalsById)

module.exports = router
