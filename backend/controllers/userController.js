const registerUser = (request, response) => {
  response.send('Register Route')
}

const loginUser = (request, response) => {
  response.send('Login Route')
}

module.exports = {
  registerUser,
  loginUser,
}
