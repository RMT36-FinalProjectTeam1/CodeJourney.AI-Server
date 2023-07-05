require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const app = express();
const port = process.env.PORT || 3000;

const morgan = require("morgan");

app
  .use(morgan("dev"))
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(router);

module.exports = app
// app.listen(port, () => {
//   console.log(`berlari di port ${port}`);
// });
