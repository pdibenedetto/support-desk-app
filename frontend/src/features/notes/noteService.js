import axios from 'axios'

const API_URL = '/api/tickets/'

// Get ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL.concat(ticketId).concat('/notes'), config)

  return response.data
}

// Create ticket
const createNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(
    API_URL.concat(ticketId).concat('/notes'),
    {
      text: noteText
    }, 
    config
  )
  console.log(response)
  return response.data
}

const noteService = {
  getNotes,
  createNote,
}

export default noteService
