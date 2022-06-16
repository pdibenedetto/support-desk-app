const asyncHandler = require('express-async-handler')

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asyncHandler(async (request, response) => {
  const {name, email, password} = request.body

  // Validation
  if (!name || !email || !password) {
    response.status(400)
    throw new Error('Please include all fields')
  }

  response.send('Register Route')
})

// @desc    Login a user
// @route   /api/users/login
// @access  Public
const loginUser = asyncHandler(async (request, response) => {
  response.send('Login Route')
})

module.exports = {
  registerUser,
  loginUser,
}
