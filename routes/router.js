const express = require('express');
const digicon = require('../controller/digicontroller');
const cartcon = require('../controller/cartController');
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

routes.get('/account', digicon.account);

routes.post('/save', digicon.save);
routes.post('/message', digicon.message);


routes.post('/cart/add', cartcon.add);
routes.get('/cart', cartcon.get);
routes.post('/cart/update', cartcon.update);
routes.post('/cart/delete', cartcon.delete);


module.exports = routes;