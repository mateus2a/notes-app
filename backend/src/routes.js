const express = require('express')

const NoteController = require('./controllers/NoteController')

const routes = express.Router()

routes.get('/notes', NoteController.index)
routes.post('/notes', NoteController.store)
routes.put('/notes/:id', NoteController.update)
routes.delete('/notes/:id', NoteController.destroy)


module.exports = routes

