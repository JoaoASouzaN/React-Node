const express = require("exprress")
const proptController = require("../controllers/prompt-controller")

const routes = express.Router()

routes.post('api/prompt', proptController.sendText)

module.exports = routes