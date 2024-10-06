const db = require('../config/db');
const Cart = {
    items: [],
    addProduct: (product, qty) => {
        const index = Cart.items.findIndex((item) => item.product.id === product.id);
        if (index !== -1) {
            Cart.items[index].qty += qty;
        } else {
            Cart.items.push({ product, qty });
        }
    },
    getCart: () => {
        return Cart.items;
    },
    clearCart: () => {
        Cart.items = [];
    }
};

module.exports = Cart;
