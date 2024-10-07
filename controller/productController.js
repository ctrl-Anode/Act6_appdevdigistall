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

const PRODUCTS_PER_PAGE = 6; // Adjust based on your preference

// Controller to display paginated products
exports.getProducts = async (req, res, next) => {
    const searchTerm = req.query.search || '';
    const page = parseInt(req.query.page) || 1;

    try {
        // Count the total number of products matching the search term
        const totalProducts = await Product.countDocuments({ name: { $regex: searchTerm, $options: 'i' } });

        // Calculate the number of pages
        const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

        // Fetch products for the current page
        const products = await Product.find({ name: { $regex: searchTerm, $options: 'i' } })
            .skip((page - 1) * PRODUCTS_PER_PAGE)
            .limit(PRODUCTS_PER_PAGE);

        // Render the EJS template
        res.render('products', {
            products: products,
            currentPage: page,
            totalPages: totalPages,
            searchTerm: searchTerm,
            cartItemCount: req.session.cart ? req.session.cart.length : 0 // Example cart count
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
};
