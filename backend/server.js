require('dotenv').config();
const weatherRouter = require('./routes/weather');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

//error handler for jwt auth
app.use((err, req, res, next) => {
    if(err.name === 'UnauthorizedError') {
        return res.status(401).json({ error: 'Invalid token' });
    }
    next(err);
})

app.use('/api', weatherRouter);

//server up and running
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));