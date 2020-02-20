const Soal = require("../models").Soal
const Room = require("../models").Room
const User = require("../models").User
const RoomUser = require("../models").RoomUser
class ControlAll {
    static getAllSoal(req, res, next) {
        Soal.findAll({
            where: {}
        })
            .then(soals => {
                res.status(200).json(soals)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createRoom(req, res) {
        let userid
        let roomnya
        User.findOne({ where: { name: req.body.name } })
            .then(userFound => {
                userid = userFound.id
                return Room.create({
                    roomname: req.body.roomname
                })
            })
            .then(roomCreated => {
                roomnya = roomCreated
                return RoomUser.create({
                    UserId: userid,
                    RoomId: roomCreated.id,
                    name: req.body.roomname
                })
            })
            .then(final => {
                res.status(201).json({ roomUser: final, roomCreated: roomnya })
            })
            .catch(err => {
                console.log(err, "<< ini error create room")
                res.status(500).json(err)
            })
    }

    static createUser(req, res) {
        User.findOne({ where: { name: req.body.name } })
            .then(usernya => {
                if (usernya) {
                    // throw({me})
                    return usernya
                } else {
                    return User.create({
                        name: req.body.name
                    })
                }
            })
            .then(userCreated => {
                res.status(201).json(userCreated)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static joinRoom(req, res) {
        // console.log(req.body, "<<<<")

        RoomUser.findAll({ where: { name: req.body.roomname } })
            .then(roomUsers => {
                for (let i of roomUsers) {
                    if (i.UserId == req.body.userId) {
                        // res.status(400).json({ message: "KAMU SUDAH MASUK" })
                        throw ({ message: "KAMU SUDAH MASUK" })
                    }
                }
                if (roomUsers.length > 4) {
                    // res.status(400).json({ message: "OOPS ROOM FULL" })
                    throw ({ message: "OOPS ROOM FULL" })
                }
                else {
                    return Room.findOne({ where: { roomname: req.body.roomname } })
                }
            })
            .then(roomFound => {
                if (roomFound) {
                    return RoomUser.create({
                        RoomId: roomFound.id,
                        UserId: req.body.userId,
                        name: req.body.roomname
                    })
                }
            })
            .then(roomUserCreated => {
                res.status(201).json(roomUserCreated)
            })
            .catch(err => {
                console.log(err, "<< ini error")
                res.status(500).json(err)
            })
    }
    static getAllRooms(req, res) {
        Room.findAll({ where: {} })
            .then(rooms => {
                res.status(200).json(rooms)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = ControlAll