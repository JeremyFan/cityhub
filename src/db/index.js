const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cityhub');

const testSchema = new mongoose.Schema({
  id: String,
  name: String
})

const TestModel = mongoose.model('Test', testSchema)

const test = new TestModel({
  id: '22222',
  name: 'hahaah'
})

TestModel.find((err, tests) => {
  console.log(tests)
})

/*
test.save((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Saved : ', data);
  }
})
*/