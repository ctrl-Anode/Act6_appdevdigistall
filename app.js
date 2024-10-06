const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const path = require('path');
//require('dotenv').config();

const session = require('express-session');
//const mysql = require('mysql2');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extender:true}));
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes);
app.use(express.static('public'));
/*
app.use(session({
    secret: 'edswegwae2387qWEU2Q3Y98QEQ9i2y',
    resave: false,  
    saveUninitialized: true, 
    cookie: { secure : false }
}));

app.use(bodyParser.urlencoded({extender:false}));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'wtfvk',
    password: 'wtfvk',
    database: 'ecomdigistall'

});*/

app.listen(8001, ()=>{
    console.log('server initialized on http://localhost:8001');

});
