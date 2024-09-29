const express = require('express');
const digicon = require('../controller/digicontroller');
const routes = express.Router();

routes.get('/', digicon.index);
routes.get('/signup', digicon.signup);
routes.get('/terms', digicon.terms);
routes.get('/login', digicon.login);
routes.get('/home', digicon.home);
routes.get('/about', digicon.about);
routes.get('/cart', digicon.cart);
routes.get('/contact', digicon.contact);
routes.get('/positions', digicon.positions);
routes.get('/products', digicon.products);
routes.get('/admin', digicon.admin);


routes.post('/save', digicon.save);





module.exports = routes;