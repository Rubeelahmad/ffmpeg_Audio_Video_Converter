const express = require("express");
const router = express.Router();
const UserController = require('./controller');
const auth = require('../../../middleware/auth')

router.get('/', UserController.getAllUsers)
// router.get('/:id', auth.auth, UserController.getUserById)
// router.get('/get-user-by-id', auth.auth, UserController.getUserById)
// router.post('/', UserController.createUser)
// router.put('/', auth.auth, UserController.updateUser)
// router.delete('/', auth.auth, UserController.deleteUser)
// router.post('/login', UserController.loginUser)

module.exports = router;