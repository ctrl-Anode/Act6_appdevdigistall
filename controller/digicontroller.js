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
    },/*
    products: (req, res) => {
        digimodel.getAllProducts((err, results) => {
            if (err) throw err;
            res.render('products', {
                showDashboard: results,
                cartItemCount: req.session.cart ? req.session.cart.length : 0,
            });
        });
    },
    // Add to Cart Function
    addToCart: (req, res) => {
        const { productId, quantity } = req.body;
    
        // Query the database to get product details
        digimodel.getProductById(productId, (err, results) => {
            if (err || results.length === 0) {
                return res.status(404).send('Product not found.');
            }
    
            const product = results[0];
    
            // If stock is insufficient
            if (product.stock_quantity < quantity) {
                return res.status(400).send('Not enough stock available.');
            }
    
            // Initialize session cart if it doesn't exist
            req.session.cart = req.session.cart || [];
    
            // Find the product in the cart and update if exists, else add new product
            const item = req.session.cart.find(item => item.id === productId);
            if (item) {
                item.quantity += quantity;  // Update quantity if already in the cart
            } else {
                req.session.cart.push({ id: product.id, name: product.name, price: product.price, quantity });
            }
    
            res.redirect('/dashboard');  // Redirect back to the dashboard
        });
    },
    

    // View Cart
    viewCart: (req, res) => {
        res.render('cart', {
            cart: req.session.cart || [],  // Cart data from session
            totalAmount: req.session.cart ? req.session.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0,
            cartItemCount: req.session.cart ? req.session.cart.length : 0,
        });
    },

    // Checkout Process
    checkout: (req, res) => {
        const cart = req.session.cart;

        if (!cart || cart.length === 0) {
            return res.status(400).send('Cart is empty.');
        }

        // Process each item in the cart
        cart.forEach(item => {
            digimodel.updateProductStock(item.id, item.quantity, (err) => {
                if (err) {
                    console.error('Error updating stock:', err);
                }
            });
        });

        // Clear the cart after checkout
        req.session.cart = [];
        res.send('Checkout complete! Your cart is now empty.');
    },*/

    // Dashboard rendering (home page)
    showDashboard: (req, res) => {
        digimodel.getAllProducts((err, results) => {
            if (err) throw err;
            res.render('home', { showDashboard: results });
        });
    }
};

module.exports = node;