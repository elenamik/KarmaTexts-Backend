/**
 * Entry point for server, sets up middleware, routing
 */
'use strict'
const express = require('express')

const routes = require('./routes')
const bodyParser = require('body-parser')

// // App
const app = express()
app.get('/', (req, res) => {
  res.send('Hello world!! This is Lena, from another branch\n')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

if (process.env.NODE_ENV === 'DEV' || process.env.NODE_ENV === 'TEST') {
  require('./forDev/createSomeData')
  const sampleUser = require('./forDev/sampleUser.js')
  app.use(sampleUser)
}

app.use(routes)
module.exports = app
