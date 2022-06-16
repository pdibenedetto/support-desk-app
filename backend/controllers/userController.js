const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

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

  // Find if user already exists
  const userExists = await User.findOne({email: email})

  if (userExists) {
    response.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if(user) {
    response.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    response.status(400)
    throw new Error('Invalid user data')
  }
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
