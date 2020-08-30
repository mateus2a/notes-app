const { Model, DataTypes } = require('sequelize')

class Note extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Note