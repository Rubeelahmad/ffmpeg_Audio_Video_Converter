const jwt = require("jsonwebtoken");
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe');
ffmpeg.setFfprobePath('C:/ffmpeg/bin');
ffmpeg.setFlvtoolPath('c:/flvtool');
var fs = require('fs')
const multer = require("multer");
const failler = require('../public/javascripts/failure')

exports.auth = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(' ')[1];
        const decodedToken = await jwt.verify(token, "secret");

        const _id = decodedToken.data;
        if (!_id) {
            const failer_401 = failler.failure_range_400.failure_401;
            return res.status(failer_401.code).send(failer_401)
        } else {
            req.query.id = _id;
            next();
        }
    } catch (error) {
        console.log("Error:::::::::::::::: ", error)
        const failer_400 = failler.failure_range_400.failure_400;
        failer_400.message = "Invalid token!";
        return res.status(failer_400.code).send(failer_400)
    }
}

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${file.originalname}`)
    }
})

exports.upload = multer({ storage });
