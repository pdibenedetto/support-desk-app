import axios from 'axios'

const API_URL = '/api/tickets/'

// Create ticket
const createNote = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, ticketData, config)

  return response.data
}

// Get tickets notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(
    API_URL.concat(ticketId).concat('/notes'),
    config
  )

  return response.data
}

const noteService = {
  createNote,
  getNotes,
}

export default noteService
