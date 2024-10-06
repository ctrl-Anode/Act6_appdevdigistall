const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');

router.post('/add', cartController.addToCart);
router.get('/', cartController.getCart);
router.get('/checkout', cartController.checkout);

module.exports = router;
