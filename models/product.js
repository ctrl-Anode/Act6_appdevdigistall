const db = require('../config/db');

const Product = {
    getAllProducts: (searchTerm, page, itemsPerPage, callback) => {
        const offset = (page - 1) * itemsPerPage;
        const query = `SELECT * FROM products WHERE name LIKE ? LIMIT ? OFFSET ?`;
        const searchQuery = `%${searchTerm}%`;
        
        db.query(query, [searchQuery, itemsPerPage, offset], (err, results) => {
            if (err) throw err;

            // Count total number of matching products for pagination
            db.query(`SELECT COUNT(*) as totalItems FROM products WHERE name LIKE ?`, [searchQuery], (err, countResults) => {
                if (err) throw err;
                const totalItems = countResults[0].totalItems;
                callback(results, totalItems);
            });
        });
    },

    getProductById: (id, callback) => {
        const query = 'SELECT * FROM products WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) throw err;
            callback(results[0]);
        });
    }
};

module.exports = Product;
