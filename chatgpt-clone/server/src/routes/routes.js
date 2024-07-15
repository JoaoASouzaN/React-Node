// const express = require("express")
const proptController = require("../controllers/propt-controller")

module.exports = (app) => {
    app.post('/api/prompt', proptController.sendText)
}
// const routes = express.Router()



// module.exports = routes