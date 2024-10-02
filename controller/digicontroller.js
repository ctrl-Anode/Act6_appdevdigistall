const digimodel = require('../models/digistallmodel');


const node = {
    index:(req, res) =>{
        res.render('index');
    },
    signup:(req, res) =>{
        res.render('signup');
    },
    save:(req, res)=>{
        const data = req.body;
        digimodel.save(data, (err) =>{
            if (err) throw err;
            res.redirect('terms');
        });   
    },
/*
    save: (req, res) => {
        const data = req.body;
        digimodel.save(data, (err, user) => {
            if (err) throw err;
            req.session.user = user;
            res.redirect('/account');
        });   
    },

    login: (req, res) => {
        if (req.method === 'POST') {
            const { email, password } = req.body;
            digimodel.login(email, password, (err, user) => {
                if (err) {
                    res.render('login', { error: 'Invalid credentials' });
                } else {
                    req.session.user = user;
                    res.redirect('/account');
                }
            });
        } else {
            res.render('login');
        }
    },

    account: (req, res) => {
        if (req.session.user) {
            res.render('account', { user: req.session.user });
        } else {
            res.redirect('/login');
        }
    },*/

    //
    account:(req, res) =>{
        res.render('account');
    },//

    terms:(req, res) =>{
        res.render('terms');
    },
    login:(req, res) =>{
        res.render('login');
    },
    home:(req, res) =>{
        res.render('home');
    },
    about:(req, res) =>{
        res.render('about');
    },
    cart:(req, res) =>{
        res.render('cart');
    },
    contact:(req, res) =>{
        res.render('contact');
    },
    positions:(req, res) =>{
        res.render('positions');
    },
    products:(req, res) =>{
        res.render('products');
    },
    admin:(req, res) =>{
        res.render('admin');
    },
    message:(req, res)=>{
        const data = req.body;
        digimodel.message(data, (err) =>{
            if (err) throw err;
            res.redirect('contact');
        });   
    }

    
};

// controller/digicontroller.js
const products = (req, res) => {
    // Fetch products from database
    const products = [
        { id: 1, name: 'Smartphone X', price: 699.99 },
        { id: 2, name: 'Laptop Pro', price: 1299.99 },
        { id: 3, name: 'Smartwatch 3', price: 199.99 },
        { id: 4, name: 'Wireless Earbuds', price: 149.99 },
    ];

    res.render('products', { products, user_id: req.session.user_id });
};

module.exports = node;