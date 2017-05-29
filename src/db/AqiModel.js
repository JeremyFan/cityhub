const mongoose = require('mongoose')

const aqiSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  aqi: {
    type: Number,
    required: true
  },
  pm25: Number,
  pm10: Number,
  so2: Number,
  co: Number,
  no2: Number,
  o3: Number
})

const AqiModel = mongoose.model('Aqi', aqiSchema)

module.exports = AqiModel