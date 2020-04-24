const express = require("express")
const request = require("request")
const app = express()

const url = `http://api.weatherstack.com/current?access_key=b39d1c901a40a2758b23604db566b83a&query=22.0797,82.1409&units=f`
const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGVtYW50bmlyIiwiYSI6ImNrOWR2NjVjZjAwaXMza24yZzAyYjVnZmsifQ.YpNoMwRLgGp57tPAozcL4Q&limit=1`

request({ url: url, json: true, }, (err, res) => {
  if (err) {
    console.log("Can not reach to WeatherStack!");
  } else if (res.body.error) {
    console.log("unable to find location");
  } else {
    const data = res.body
    console.log(data.current)
    console.log(`It's currently ${data.current.temperature} degree celsius in Bilaspur. It feels like ${data.current.feelslike} degree celsius.It's ${data.current.weather_descriptions[0]}.`);
  }
})

// request({ url: geoUrl, json: true }, async (err, res) => {
//   const data = await res.body.features[0]
//   const lat = data.center[0]
//   const lon = data.center[1]
// })
