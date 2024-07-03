const express = require("express") // importando exten express
const cors = require("cors") // importando cors
const routes = require("../routes/routes")

require("dotenv").config() // chama o dotenv usando o metodo config

const app = express()

app.use(express.json()) // os retornos vão ser em .json
app.use(cors())
app.use(routes)

module.exports = app