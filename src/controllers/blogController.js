const Blog = require('../models/blog');
const { Types: { ObjectId } } = require('mongoose');

exports.createBlog = async (req, res) => {
    try {
        const { email, title, content, publicationDate, writer } = req.body;

        const blog = await Blog.create({ email, title, content, publicationDate, writer });
        res.status(201).json(blog);
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getUserBlog = async (req, res) => {
    const { email } = req.query;
    try {
        const blogs = await Blog.find({ email });
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching user blogs:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const id = req?.params?.id;
        if (!id) {
            return res.status(400).json({ error: 'Blog ID is required' });
        }

        const value = { _id: new ObjectId(id) };

        const blog = await Blog.findById(value);

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog by ID:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const id = req?.params?.id;
        const value = { _id: new ObjectId(id) };
        const blog = await Blog.findByIdAndUpdate(value, { title, content }, { new: true });
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const id = req?.params?.id;
        if (!id) {
            return res.status(400).json({ error: 'Blog ID is required' });
        }

        const value = { _id: new ObjectId(id) };

        const blog = await Blog.findByIdAndDelete(value);

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
