const express = require("express")
const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
// const app = express()

const address = process.argv[2]

geocode(address, (err, data) => {
  const { latitude, longitude, location } = data
  if (!address) {
    console.log("please provide address!")
  } else {
    if (err) {
      return console.log(err)
    }
    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return err
      }
      console.log(location)
      console.log(forecastData)
    })
  }
})
