const User = require('../users/users-model');

function logger(req, res, next) {
  console.log(`hitting ${req.method} ${req.originalUrl} at ${new Date().toLocaleString()}`)
  next()
}

async function validateUserId(req, res, next) {
  const { id } = req.params
  try{
    const user = await User.getById(id)
    if(!user){
      res.status(404).json({message: 'user not found'})
    }else{
      req.user = user
      next()
    }
  }catch(err){
    next()
  }
}

async function validateUser(req, res, next) {
  const payload = req.body.name
  if(!payload){
    next({message: "missing required name field", status:400})
  }else{
    next()
  }
}

function validatePost(req, res, next) {
  const payload = req.body.text
  if(!payload){
    next({message: "missing required text field", status:400})
  }else{
    next()
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}