const mongoose = require('../database');

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  number: {
    type: Number,
    require: true,
  },
  job: {
    type: String,
    require: true,
  },
});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;
