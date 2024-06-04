const Blog = require('../models/blog');

exports.createBlog = async (req, res) => {
    try {
        const { email, title, content, publicationDate, writer, } = req.body;

        const blog = await Blog.create({ title, content, publicationDate, writer, email });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getUserBlog = async (req, res) => {
    const { email } = req.query;
    console.log(email, '...............................')
    try {

        const blogs = await Blog.findAll({ where: { email } });
        console.log(blogs)
        res.status(200).json(blogs);


    } catch (error) {
        console.error('Error fetching user Blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { title, content, publicationDate, writer } = req.body;
        const blog = await Blog.findByPk(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        blog.title = title;
        blog.content = content;
        blog.publicationDate = publicationDate;
        blog.writer = writer;
        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        await blog.destroy();
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
