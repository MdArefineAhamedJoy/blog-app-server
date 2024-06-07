const mongoose = require('mongoose');

// Define the Mongoose schema for the Blog model
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,

    },
    writer: {
        type: String,

    },
    email: {
        type: String,

    },
});

const Blog = mongoose.model('Blog', blogSchema);


module.exports = Blog;
