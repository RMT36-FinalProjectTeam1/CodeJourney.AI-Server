const express = require('express')
const router = express.Router()

router
  .get("/", (req, res) => {
    res.send("Hello World")
  })
  // .use("/path", require('./path'))

module.exports = router;