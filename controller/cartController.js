// controller/cartcontroller.js
const cartmodel = require('../models/cartmodel');

const cart = {
    add: (req, res) => {
        const data = {
            product_id: req.body.product_id,
            user_id: req.body.user_id,
            quantity: req.body.quantity
        };
        cartmodel.add(data, (err, result) => {
            if (err) throw err;
            res.redirect('/cart');
        });
    },
    get: (req, res) => {
        const user_id = req.session.user_id;
        cartmodel.get(user_id, (err, result) => {
            if (err) throw err;
            res.render('cart', { cart: result });
        });
    },
    update: (req, res) => {
        const data = {
            quantity: req.body.quantity,
            id: req.body.id
        };
        cartmodel.update(data, (err, result) => {
            if (err) throw err;
            res.redirect('/cart');
        });
    },
    delete: (req, res) => {
        const id = req.body.id;
        cartmodel.delete(id, (err, result) => {
            if (err) throw err;
            res.redirect('/cart');
        });
    }
};

module.exports = cart;