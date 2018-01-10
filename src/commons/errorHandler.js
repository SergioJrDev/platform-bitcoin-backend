const _ = require('lodash')

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    const errors = parseErrors(bundle.errors)
    res.status(400).json({errors})
  } else {
    next()
  }
}

const parseErrors = restFulErrors => {
  const errors = []
  _.forIn(restFulErrors, error => errors.push(error.message))
  return errors
}