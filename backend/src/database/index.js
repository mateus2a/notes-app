const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Note = require('../models/Note')

const connection = new Sequelize(dbConfig)

Note.init(connection)

module.exports = connection