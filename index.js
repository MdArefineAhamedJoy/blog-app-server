const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./src/config/database');
const authRoutes = require('./src/routers/authRouter');
const blogRoutes = require('./src/routers/blogRouter');
const userRoutes = require('./src/routers/userRouter');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', blogRoutes);
app.use('/api', userRoutes);

app.get('/', async (req, res) => {
    res.send('Welcome to my-block-app server')
})

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
