const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 5003;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})