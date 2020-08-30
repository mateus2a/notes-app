const Note = require('../models/Note');

module.exports = {
  async index(req, res) {
    const notes = await Note.findAll();

    return res.json(notes)
  },

  async store(req, res) {
    const note = await Note.create(req.body)

    return res.send(note)
  },

  async update(req, res) {
    const note = await Note.findByPk(req.params.id)
    
    await note.update(req.body)

    return res.json({ note })
  },

  async destroy(req, res) {
    const note = await Note.findByPk(req.params.id)

    await note.destroy()

    return res.json()
  }
}