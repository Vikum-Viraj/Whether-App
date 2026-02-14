require('dotenv').config();
const weatherRouter = require('./routes/weather');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/api', weatherRouter);

//server up and running
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));