const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("hw")
})

app.get("/miarchivo", (req, res) => {
  res.sendFile("./Node.js.png", {
    root: __dirname,
  })
})

app.get("/user", (req, res) => {
  res.json({
    name: "alfredo",
    lastname: "canto",
    age: "23",
    array: [10, 20, 30],
    adress: {
      city: "san nicolas",
      street: "balcarce",
    },
  })
})

app.get("/isalive", (req, res) => {
    res.sendStatus(204) //No muestra nada, solo devuelve un 204 que se puede ver en net
})

app.listen(3000)
console.log("Server listening on port " + 3000)
