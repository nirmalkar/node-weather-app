const express = require("express")
const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
// const app = express()

const address = process.argv[2]

geocode(address, (err, data) => {
  if (err) {
    return console.log(err)
  }
  forecast(data.latitude, data.longitude, (err, forecastData) => {
    if (err) {
      return err
    }
    console.log(data.location)
    console.log(forecastData)
  })
})
