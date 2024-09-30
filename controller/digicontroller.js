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

module.exports = node;