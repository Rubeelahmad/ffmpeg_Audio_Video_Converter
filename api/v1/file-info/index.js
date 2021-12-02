const express = require("express");
const router = express.Router();
// const multer = require("multer");
const FileInfoController = require('./controller');
const { auth, upload } = require('../../../middleware/auth');
console.log("API Hit::::::::::::::::::::::::::: " )
router.get('/', FileInfoController.getAllFiles);
router.post('/file-upload', upload.single("file"), FileInfoController.fileUpload);
router.post('/video-converter', FileInfoController.videoConverter);
router.post('/audio-converter',  FileInfoController.audioConverter);
router.post('/video-compress', FileInfoController.videoCompress);
router.post('/mp4-to-mp3', FileInfoController.mp4ToMp3);
router.post('/remove-file', FileInfoController.removeFile)

module.exports = router;