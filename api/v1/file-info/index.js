const express = require("express");
const router = express.Router();
// const multer = require("multer");
const FileInfoController = require('./controller');
const { auth, upload } = require('../../../middleware/auth');

router.get('/', FileInfoController.getAllFiles);
router.post('/file-upload', upload.single("file"), FileInfoController.fileUpload);
router.post('/video-converter', FileInfoController.videoConverter);
router.post('/audio-converter',  FileInfoController.audioConverter);
router.post('/video-compress', upload.single("file"), FileInfoController.videoCompress);
router.post('/mp4-to-mp3', upload.single("file"), FileInfoController.mp4ToMp3);

module.exports = router;