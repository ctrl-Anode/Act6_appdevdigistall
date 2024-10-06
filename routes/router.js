/*const express = require('express');
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

routes.get('/adminDashboard', digicon.adminDashboard);
routes.get('/adminLogin', digicon.adminLogin);
routes.get('/adminAddProd', digicon.adminAddProd);


routes.get('/account', digicon.account);

routes.post('/save', digicon.save);
routes.post('/message', digicon.message);


routes.post('/cart/add', cartcon.add);
routes.get('/cart', cartcon.get);
routes.post('/cart/update', cartcon.update);
routes.post('/cart/delete', cartcon.delete);


module.exports = routes;*/

const express = require('express');
const digicon = require('../controller/digicontroller');
const routes = express.Router();

routes.get('/', digicon.index);
routes.get('/signup', digicon.signup);
routes.get('/terms', digicon.terms);

routes.get('/login', digicon.login);
routes.post('/login', digicon.userlogin);
//
routes.get('/home', digicon.home);
routes.get('/productAddtoCart', digicon.productAddtoCart);

routes.get('/adminLogin', digicon.adminLogin);
routes.get('/adminDashboard', digicon.adminDashboard);
routes.get('/adminAddProd', digicon.adminAddProd);
routes.get('/adminManageProd', digicon.adminManageProd);
routes.get('/adminManageMessage', digicon.adminManageMessage);
routes.get('/adminUser', digicon.adminUser);
routes.get('/index', digicon.index);


//routes.get('/home', digicon.home);
routes.get('/about', digicon.about);
//routes.get('/cart', digicon.cart);
routes.get('/contact', digicon.contact);
routes.get('/positions', digicon.positions);
routes.get('/products', digicon.products);
routes.get('/admin', digicon.admin);
routes.get('/addproducts', digicon.addproducts);
//routes.get('/manageusers', digicon.manageusers);
//routes.get('/usersmessages', digicon.usersmessages);
//routes.get('/manageproducts', digicon.manageproducts);
//routes.get('/produpdate', digicon.produpdate);
//for product
routes.get('/prodinfo', digicon.prodinfo);
routes.get('/delete/:id', digicon.delete);
routes.get('/edit/:id', digicon.edit);
routes.post('/edit/:id', digicon.update);
//for user
routes.get('/userinfo', digicon.userinfo);
routes.get('/userdelete/:id', digicon.userdelete);
routes.get('/useredit/:id', digicon.useredit);
routes.post('/useredit/:id', digicon.userupdate);
//for message
routes.get('/usersmessages', digicon.usersmessages);
routes.get('/messagedelete/:id', digicon.messagedelete);

routes.post('/save', digicon.save);
routes.post('/message', digicon.message);
routes.post('/addprod', digicon.addprod);
//added
routes.get('/dashboard', digicon.showDashboard);

// Add a product to the cart
routes.post('/add-to-cart', digicon.addToCart);

// View the cart
routes.get('/cart', digicon.viewCart);

// Checkout (process transactions)
routes.post('/checkout', digicon.checkout);



module.exports = routes;