const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Note = require('../models/noteModel')
const Ticket = require('../models/ticketModel')

// @desc    Get ticket's notes
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
const getNotes = asyncHandler(async (request, response) => {
  // Get user using the id in the JWT
  const user = await User.findById(request.user.id)
  if (!user) {
    response.status(401)
    throw new Error('User not found')
  }

  const tickets = await Ticket.findById(request.params.ticketId)

  if (tickets.user.toString() !== request.user.id) {
    response.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.find({ ticket: request.params.ticketId })

  response.status(200).json(notes)
})


// @desc    Get ticket's notes
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
const addNote = asyncHandler(async (request, response) => {
  // Get user using the id in the JWT
  const user = await User.findById(request.user.id)
  if (!user) {
    response.status(401)
    throw new Error('User not found')
  }

  const tickets = await Ticket.findById(request.params.ticketId)

  if (tickets.user.toString() !== request.user.id) {
    response.status(401)
    throw new Error('User not authorized')
  }

  const note = await Note.create(
    { 
      text: request.body.text,
      isStaff: false,
      ticket: request.params.ticketId,
      user: request.user.id,
    })

  response.status(200).json(note)
})

module.exports = {
  getNotes,
  addNote,
}
