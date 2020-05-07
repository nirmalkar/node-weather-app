const request = require("request")

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGVtYW50bmlyIiwiYSI6ImNrOWR2NjVjZjAwaXMza24yZzAyYjVnZmsifQ.YpNoMwRLgGp57tPAozcL4Q&limit=1`
  request({ url: url, json: true, }, (err, res) => {
    if (err) {
      console.log(res);
      callback("Unable to connect to weather services", undefined)
    } else if (res.body.features == 0) {
      callback("Unable to find the locations, search another location", undefined)
    } else {
      const data = res.body.features[0]
      // callback(undefined, data)
      callback(undefined, {
        longitude: data.center[0],
        latitude: data.center[1],
        location: data.place_name
      })
    }
  })
}

module.exports = geocode