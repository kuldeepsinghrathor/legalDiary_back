const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');

const adminRoutes = require('../routes/adminRoutes');

// for .env file
require('dotenv').config();

const mongoose = require('../connection/db');

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'templates', 'views'));
// Serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, "../public")));

app.use("/admin", adminRoutes);


app.listen(port, () => {
    console.log(`Server is started on ${port}`);
})