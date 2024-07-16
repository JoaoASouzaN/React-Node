const express = require("express") // importando exten express
const bodyParser = require('body-parser')
const cors = require("cors") // importando cors
const routes = require("./routes/routes")

require("dotenv").config() // chama o dotenv usando o metodo config

const app = express()

app.use(bodyParser.json())
app.use(cors())
routes(app)

module.exports = app