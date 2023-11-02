const express = require("express")
const router = express.Router()

router.get("/profile", (req, res) => {
  res.send("profile page")
})

router.all("/login", (req, res) => {
  res.send("login page")
})

router.use((req, res, next) => {
  if (req.query.login === "alfredo@email.com") {
    next()
  } else {
    res.send("No authorized")
  }
})

router.get("/dashboard", (req, res) => {
  res.send("dashboard page")
})

module.exports = router
