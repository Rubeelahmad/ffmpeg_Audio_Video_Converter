const express = require("express");
const router = express.Router();
// const multer = require("multer");
const FileInfoController = require('./controller');
const {auth, upload} = require('../../../middleware/auth');

router.get('/', FileInfoController.getAllFiles);
router.post('/file-upload', upload.single("file"), FileInfoController.fileUpload);
router.post('/video-converter', upload.single("file"), FileInfoController.videoConverter);
router.post('/audio-converter', upload.single("file"), FileInfoController.audioConverter);
router.post('/video-compress', upload.single("file"), FileInfoController.videoCompress);
router.post('/mp4-to-mp3', upload.single("file"), FileInfoController.mp4ToMp3);
// router.get('/:id', auth.auth, UserController.getUserById)
// router.get('/get-user-by-id', auth.auth, UserController.getUserById)
// router.post('/', UserController.createUser)
// router.put('/', auth.auth, UserController.updateUser)
// router.delete('/', auth.auth, UserController.deleteUser)
// router.post('/login', UserController.loginUser)

module.exports = router;