const Note = require('../models/Note')

module.exports = {
  async store(req, res) {
    const { text } = req.body;

    const note = await Note.create({text})

    return res.json(note)
  }
}