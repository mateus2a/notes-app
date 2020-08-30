const express = require('express')

const NoteController = require('./controllers/NoteController')

const routes = express.Router()

routes.post('/notes', NoteController.store)


module.exports = routes

