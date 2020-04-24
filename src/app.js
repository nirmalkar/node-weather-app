const express = require("express")
const request = require("request")
const app = express()

const url = `http://api.weatherstack.com/current?access_key=b39d1c901a40a2758b23604db566b83a&query=22.0797,82.1409`

request({ url: url }, (err, res) => {
  const data = JSON.parse(res.body)
  console.log(data.current)
})