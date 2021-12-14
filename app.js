const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postRoute = require('./routes/posts');

app.use('/posts',postRoute);

//Routes
app.get('/', (req,res) =>{
    res.send('We are on home');
});



//connect to database
mongoose.connect(
    process.env.DB_CONNECTION, {useNewUrlParser: true},
     ()=> console.log('connected to DB!')
);

//listening the server on port 3000
app.listen(8080);