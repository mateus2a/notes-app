module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'notes-app',
  define: {
    timestamps: true,
    underscored: true,
  }
}