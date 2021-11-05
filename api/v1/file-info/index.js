const express = require("express");
const router = express.Router();
// const multer = require("multer");
const FileInfoController = require('./controller');
const {auth, upload} = require('../../../middleware/auth');

router.get('/', FileInfoController.getAllFiles);
router.post('/file-upload', upload.single("file"), FileInfoController.fileUpload);
router.post('/fluent-upload-file', upload.single("file"), FileInfoController.fluentFileUpload);
// router.get('/:id', auth.auth, UserController.getUserById)
// router.get('/get-user-by-id', auth.auth, UserController.getUserById)
// router.post('/', UserController.createUser)
// router.put('/', auth.auth, UserController.updateUser)
// router.delete('/', auth.auth, UserController.deleteUser)
// router.post('/login', UserController.loginUser)

module.exports = router;