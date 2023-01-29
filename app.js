const express = require('express')
const app = express()

const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

module.exports = app