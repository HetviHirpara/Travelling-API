const express = require('express');
const bodyParser = require('body-parser');
const appRoutes = require('./routes/route');
const mongoose = require('./db/data')

const app = express();  

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRoutes);

app.listen(6500, () => {
    console.log("Server is running on port 6500");
});