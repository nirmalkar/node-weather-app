const request = require('request')


const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b39d1c901a40a2758b23604db566b83a&query=${latitude},${longitude}`
  // &units=f
  request({ url: url, json: true, }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined)
    } else if (res.body.error) {
      callback("Unable to find location", undefined)
    } else {
      callback(undefined, `It's currently ${res.body.current.temperature} degree celsius. It feels like ${res.body.current.feelslike} degree celsius.It's ${res.body.current.weather_descriptions[0]}.`)
    }
  })
}

module.exports = forecast