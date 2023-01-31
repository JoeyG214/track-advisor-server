const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const morgan = require('morgan')
const mongoose = require('mongoose')

logger.info('Connecting to: ', config.MONGODB_URI)

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB:', error.message)
  })

app.use(morgan('tiny'))

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

module.exports = app