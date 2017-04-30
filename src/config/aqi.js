/**
 * @fileOverview 空气质量等级
 *
 * 关于质量等级的range和颜色标识依照：
 * 环境空气质量指数（AQI）技术规定 HJ 633-2012
 * http://210.72.1.216:8080/gzaqi/Document/aqijsgd.pdf
 * 
 */

const AQI = [{
    level: 'excellent',
    range: [0, 50],
    color: '#00e400',
    rgba: '0, 228, 0',
    description: 'Excellent No health implications.'
  },

  {
    level: 'good',
    range: [51, 100],
    color: '#ff0',
    rgba: '255, 255, 0',
    description: 'Few hypersensitive individuals should reduce outdoor exercise.'
  },

  {
    level: 'lightly',
    range: [101, 150],
    color: '#ff7e00',
    rgba: '255, 126, 0',
    description: 'Slight irritations may occur, individuals with breathing or heart problems should reduce outdoor exercise.'
  },

  {
    level: 'moderately',
    range: [151, 200],
    color: '#f00',
    rgba: '255, 0, 0',
    description: 'Slight irritations may occur, individuals with breathing or heart problems should reduce outdoor exercise.'
  },

  {
    level: 'heavily',
    range: [201, 300],
    color: '#99004c',
    rgba: '153, 0, 76',
    description: 'Healthy people will be noticeably affected. People with breathing or heart problems will experience reduced endurance in activities. These individuals and elders should remain indoors and restrict activities.'
  },

  {
    level: 'severely',
    range: [301, 9999],
    color: '#7e0023',
    rgba: '126, 0, 35',
    description: 'Healthy people will experience reduced endurance in activities. There may be strong irritations and symptoms and may trigger other illnesses. Elders and the sick should remain indoors and avoid exercise. Healthy individuals should avoid outdoor activities.'
  }
]

const SO2 = [0, 150, 500, 650, 800]

const NO2 = [0, 100, 200, 700, 1200, 2340, 3090, 3840]

const O3 = [0, 160, 200, 300, 400, 800, 1000, 1200]

export { AQI, SO2, NO2, O3 }