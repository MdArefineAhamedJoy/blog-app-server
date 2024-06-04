const express = require('express');
const { register, login, verifyToken, getAllUsers } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddlewares');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUsers);



module.exports = router;
