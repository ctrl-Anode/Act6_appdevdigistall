// models/cartmodel.js
const db = require('../config/db');

const cart = {
    add: (data, callback) => {
        const query = "INSERT INTO cart (product_id, user_id, quantity) VALUES (?, ?, ?)";
        db.query(query, [data.product_id, data.user_id, data.quantity], callback);
    },
    get: (user_id, callback) => {
        const query = "SELECT * FROM cart WHERE user_id = ?";
        db.query(query, [user_id], callback);
    },
    update: (data, callback) => {
        const query = "UPDATE cart SET quantity = ? WHERE id = ?";
        db.query(query, [data.quantity, data.id], callback);
    },
    delete: (id, callback) => {
        const query = "DELETE FROM cart WHERE id = ?";
        db.query(query, [id], callback);
    }
};

module.exports = cart;