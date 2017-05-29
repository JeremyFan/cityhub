const fs = require('fs')
const $ = require('cheerio')
const AqiModel = require('../src/db/AqiModel')
const mongoose = requrie('mongoose')
mongoose.connect('mongodb://localhost/cityhub');

function cheer(html) {
  const $table = $('table', html).first()
  const $trs = $('tr', $table)

  const r =
    $trs.filter(index => {
      return index > 0
    }).map((i, el) => {
      try {
        let $tds = $('td', $(el))
        let city = 'beijing'
        let date = $tds.eq(0).text().trim()
        let id = [city, date].join('-')
        let aqi = $tds.eq(1).text().trim()
        let pm25 = $tds.eq(4).text().trim()
        let pm10 = $tds.eq(5).text().trim()
        let so2 = $tds.eq(6).text().trim()
        let co = $tds.eq(7).text().trim()
        let no2 = $tds.eq(8).text().trim()
        let o3 = $tds.eq(9).text().trim()

        return {
          id,
          city,
          date,
          aqi,
          pm25,
          pm10,
          so2,
          co,
          no2,
          o3
        }
      } catch (e) {
        console.log(`error on line ${i}: `, e)
      }
    })

  return [].slice.call(r)
}



function insert() {
  let html = fs.readFileSync('data/data.html', 'utf-8')
  let aqis = cheer(html)

  aqis.map((aqi, i) => {
    let model = new AqiModel(aqi)
    model.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Saved : ', data);
      }
    })
  })
}

insert()
fs.watch('data/data.html', insert)