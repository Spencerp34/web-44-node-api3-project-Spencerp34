function logger(req, res, next) {
  console.log(`hitting ${req.method} ${req.originalUrl} at ${new Date().toLocaleString()}`)
  next()
}

function validateUserId(req, res, next) {
  const { id } = req.params
  
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}