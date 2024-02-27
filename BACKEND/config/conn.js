const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Quizapp');
const db = mongoose.connection;
db.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
module.exports = mongoose;