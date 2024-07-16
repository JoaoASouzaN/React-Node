const proptController = require("../controllers/propt-controller")

module.exports = (app) => {
    app.post('/api/prompt', proptController.sendText)
}