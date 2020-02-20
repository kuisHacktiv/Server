const routes = require("express").Router()
const controller = require("../controllers/controlGet")

routes.get("/soals", controller.getAllSoal)
module.exports = routes