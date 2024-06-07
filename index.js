require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const authRoutes = require('./src/routers/authRouter');
const blogRoutes = require('./src/routers/blogRouter');
const userRoutes = require('./src/routers/userRouter');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', blogRoutes);
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my-blog-app server');
});

const PORT = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main() {


    await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.p45io4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Connected to MongoDB...');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
