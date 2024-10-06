const Product = require('../models/product');

exports.getAllProducts = (req, res) => {
    const searchTerm = req.query.search || '';  
    const page = parseInt(req.query.page) || 1;  
    const itemsPerPage = 6;  

    Product.getAllProducts(searchTerm, page, itemsPerPage, (products, totalItems) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        res.render('products', {
            products,
            currentPage: page,
            totalPages,
            searchTerm
        });
    });
};

exports.getProductById = (req, res) => {
    const id = req.params.id;
    Product.getProductById(id, (product) => {
        res.render('product', { product });
    });
};
