const Soal = require("../models").Soal

class ControlSoal {
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
}

module.exports = ControlSoal