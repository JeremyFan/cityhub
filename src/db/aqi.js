const AqiModel = require('./AqiModel')

function findByYear(year) {
  return AqiModel.find({
    date: {
      $regex: new RegExp(year)
    }
  }).exec()
}


findByYear(2015).then(data => {
  console.log(data.length)
})