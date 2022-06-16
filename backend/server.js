const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (request, response) => {
  response.status(200).json({message: 'Welcome to the support desk API'})
})

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
