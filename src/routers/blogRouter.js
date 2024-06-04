const express = require('express');
const { createBlog, getBlogs, getUserBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();

router.post('/blogs', createBlog);
router.post('/user/blogs', getUserBlog);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
router.put('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);

module.exports = router;
