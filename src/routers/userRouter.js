
const express = require('express');
const { getUserProfile, updateProfile } = require('../controllers/userController');
const router = express.Router();

router.get('/profile', getUserProfile);
router.put('/profile/:email', updateProfile);


module.exports = router;
