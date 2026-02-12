require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

//server up and running
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));