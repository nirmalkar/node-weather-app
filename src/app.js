const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")

const publicDirPath = path.join(__dirname, "../public")

app.set('view engine', 'hbs');
app.use(express.static(publicDirPath))

app.get("", (req, res) => {
  res.render("index", {
    title: "Title",
    name: "Hemant"
  })
})

app.get("", (req, res) => {
  res.send("<h1>Hello world!</h1>")
})
app.get("/help", (req, res) => {
  res.render("help", {
    title: "hey this is help page!",
    message: "Please call 44536898 form help"
  })
})

app.get("/about", (req, res) => {
  res.render("about")
})
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      message: "Error you must provide address!"
    })
  }
  res.send({
    forecast: "It's hot summer!",
    location: "Bilaspur",
    address: req.query.address
  })
})
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    message: "Page Not Found"
  })
})
app.listen(4000, () => {
  console.log("server is running on  port 4000")
})