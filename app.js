const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');

const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extender:true}));
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes);
app.use(express.static('public'));



app.listen(8001, ()=>{
    console.log('server initialized on http://localhost:8001');

});
