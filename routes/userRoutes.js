const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/addUser', userController.postUser);
router.get('/getUser/:emailId', userController.getUser);

module.exports = router;