const Product = require('../models/product');
const Cart = require('../models/cart');

exports.addToCart = (req, res) => {
    const productId = req.body.productId;
    const qty = parseInt(req.body.qty, 10);

    Product.getProductById(productId, (product) => {
        Cart.addProduct(product, qty);
        res.redirect('/cart');
    });
};

exports.getCart = (req, res) => {
    const cart = Cart.getCart();
    res.render('cart', { cart });
};

exports.checkout = (req, res) => {
    const cart = Cart.getCart();
    if (cart.length > 0) {
        Cart.clearCart();
        res.render('checkout', { message: 'Transaction successful!' });
    } else {
        res.render('checkout', { message: 'No items in the cart.' });
    }
};
