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
    },/*
    home:(req, res) =>{
        res.render('home');
    },*/
    about:(req, res) =>{
        res.render('about');
    },/*
    cart:(req, res) =>{
        res.render('cart');
    },*/
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
    },
    addproducts:(req, res) =>{
        res.render('addproducts');
    },/*
    manageusers:(req, res) =>{
        res.render('manageusers');
    },
    usersmessages:(req, res) =>{
        res.render('usersmessages');
    },*/
    addprod:(req, res)=>{
        const data = req.body;
        digimodel.addprod(data, (err) =>{
            if (err) throw err;
            res.redirect('addproducts');
        });
    },/*
    manageproducts:(req, res) =>{
        res.render('manageproducts');
    },*/
    prodinfo:(req, res) => {
        digimodel.getallinfo((err, results)=>{
            if (err) throw err;
            res.render('manageproducts', {prodinfo: results});
        });
    },
    delete:(req, res) =>{
        const id = req.params.id;
        digimodel.delete(id, (err) =>{
            if (err) throw err;
            res.redirect('/prodinfo');
        });
        
    },
    edit:(req, res) => {
        const id = req.params.id;
        digimodel.getupdateinfo(id, (err, results) =>{
            if (err) throw err;
            res.render('updateproducts', {digimodel : results[0]});
        });
    },
    update:(req, res) =>{
        const id =req.params.id;
        const data = req.body;
        digimodel.produpdate(id, data, (err) =>{
            if (err) throw err;
            res.redirect('/prodinfo');
        })
    },
    userinfo:(req, res) => {
        digimodel.userinfo((err, results)=>{
            if (err) throw err;
            res.render('manageusers', {userinfo: results});
        });
    },
    userdelete:(req, res) =>{
        const id = req.params.id;
        digimodel.userdelete(id, (err) =>{
            if (err) throw err;
            res.redirect('/userinfo');
        });
        
    },
    useredit:(req, res) => {
        const id = req.params.id;
        digimodel.useredit(id, (err, results) =>{
            if (err) throw err;
            res.render('updateusers', {digimodel : results[0]});
        });
    },
    userupdate:(req, res) =>{
        const id =req.params.id;
        const data = req.body;
        digimodel.userupdate(id, data, (err) =>{
            if (err) throw err;
            res.redirect('/userinfo');
        })
    },
    usersmessages:(req, res) => {
        digimodel.usersmessages((err, results)=>{
            if (err) throw err;
            res.render('manageusersmessage', {usersmessages: results});
        });
    },
    messagedelete:(req, res) =>{
        const id = req.params.id;
        digimodel.messagedelete(id, (err) =>{
            if (err) throw err;
            res.redirect('/usersmessages');
        });
        
    },
    userlogin: (req, res) => {
        const { email, password } = req.body;
        digimodel.findUserByEmail(email, (err, results) => {
            if (err) throw err;
            if (results.length && results[0].password === password) {
                res.redirect('/dashboard');
            } else {
                res.send('Invalid email or password');
            }
        });
    },//add
    showDashboard: (req, res) => {
        digimodel.getAllProducts((err, results) => {
            if (err) throw err;
            res.render('home', { showDashboard : results });
        });
    },

    addToCart: (req, res) => {
        const { productId, quantity } = req.body;
        const data = req.data.id;  // Assume session management is done
        digimodel.addToCart(productId, quantity, data, (err) => {
            if (err) throw err;
            res.redirect('/cart');
        });
    },

    viewCart: (req, res) => {
        const data = req.body.id;
        digimodel.getCartItems(data, (err, results) => {
            if (err) throw err;
            res.render('cart', {viewCart : results });
        });
    },

    checkout: (req, res) => {
        const data = req.body.id;
        digimodel.processTransaction(data, (err) => {
            if (err) throw err;
            
            // Clear the cart after transaction
            productModel.clearCart(sessionId, (clearErr) => {
                if (clearErr) throw clearErr;
                res.redirect('/transactions');
            });
        });
    }
};

module.exports = node;