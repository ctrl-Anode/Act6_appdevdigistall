const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const path = require('path');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extender:true}));
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes);
app.use(express.static('public'));

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.get('/aa', (req, res) => {
    res.redirect('/products');//mod
});

app.listen(8001, ()=>{
    console.log('server initialized on http://localhost:8001');

});
