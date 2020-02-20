const routes = require("express").Router()
const controller = require("../controllers/controlGet")

routes.get("/soals", controller.getAllSoal)
routes.post("/rooms", controller.createRoom)
routes.post("/users", controller.createUser)
routes.post("/join", controller.joinRoom)
routes.get("/rooms", controller.getAllRooms)
module.exports = routes