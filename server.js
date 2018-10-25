// import dependencies and initialize app
const express = require('express')
const app = express()
const port = 3000
const logger = require('morgan')
const bodyParser = require('body-parser')
// middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// index route

// add routes

// add error handler
app.listen(port, () => console.log(`Rock'n on port ${port}`))
