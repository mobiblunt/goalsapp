const getGoals = (req,res) => {
  res.status(200).json({message: "Get Goals"})
}

const setGoal = (req,res) => {
  if(!req.body.text) {
    res.status(400).json({message: "please add text"})
  }
  res.status(200).json({message: "Set Goals"})
}

const updateGoal = (req,res) => {
  res.status(200).json({message: `update Goal ${req.params.id}` })
}

const deleteGoal = (req,res) => {
  res.status(200).json({message: `delete Goal ${req.params.id}`} )
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}