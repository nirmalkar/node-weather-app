const request = require("request")

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGVtYW50bmlyIiwiYSI6ImNrOWR2NjVjZjAwaXMza24yZzAyYjVnZmsifQ.YpNoMwRLgGp57tPAozcL4Q&limit=1`
  request({ url: url, json: true, }, (err, res) => {
    const { center, place_name } = res.body.features[0]
    const { features } = res.body
    if (err) {
      callback("Unable to connect to weather services", undefined)
    } else if (features == 0) {
      callback("Unable to find the locations, search another location", undefined)
    } else {
      // callback(undefined, data)
      callback(undefined, {
        longitude: center[0],
        latitude: center[1],
        location: place_name
      })
    }
  })
}

module.exports = geocode