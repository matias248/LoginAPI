const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');


router.post('/login', userCtrl.login);
router.post('/register',userCtrl.createUser);
router.get('/users',auth,userCtrl.getUsers);




module.exports = router;