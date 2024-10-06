/*const db = require('../config/db');
const information = {
    save:(data, callback) =>{
        const query = "insert into users (full_name, email, password) values(?,?,?)";
        db.query(query, [data.full_name, data.email, data.password], callback);
    }
};

module.exports = information;

*/
const db = require('../config/db');
const information = {
    save:(data, callback) =>{
        const query = "insert into users (full_name, email, password) values(?,?,?)";
        db.query(query, [data.full_name, data.email, data.password], callback);
    },
    message:(data, callback) =>{
        const query = "insert into message (name, email, subject, message) values(?,?,?,?)";
        db.query(query, [data.name, data.email, data.subject, data.message], callback);
    },
    addprod:(data, callback) =>{
        const query = "insert into products (name, description, price, stock_quantity, image_url) values(?,?,?,?,?)";
        db.query(query, [data.name, data.description, data.price, data.stock_quantity, data.image_url], callback);
    },
    getallinfo:(callback) => {
        const query = "select * from products";
        db.query(query, callback);
    },
    delete:(id, callback) => {
        const q = "delete from products where id=?";
        db.query(q, [id], callback);
    },
    getupdateinfo:(id, callback) => {
        const query = "select * from products where id=?";
        db.query(query,[id], callback);
    },
    produpdate:(id, data, callback) => {
        const query = "update products set name=?, description=?, price=?, stock_quantity=? where id=?";
        db.query(query, [data.name, data.description, data.price, data.stock_quantity, id], callback);
    },
    userinfo:(callback) => {
        const query = "select * from users";
        db.query(query, callback);
    },
    userdelete:(id, callback) => {
        const q = "delete from users where id=?";
        db.query(q, [id], callback);
    },
    useredit:(id, callback) => {
        const query = "select * from users where id=?";
        db.query(query,[id], callback);
    },
    userupdate:(id, data, callback) => {
        const query = "update users set full_name=?, email=?, password=? where id=?";
        db.query(query, [data.full_name, data.email, data.password, id], callback);
    },
    usersmessages:(callback) => {
        const query = "select * from message";
        db.query(query, callback);
    },
    messagedelete:(id, callback) => {
        const q = "delete from message where id=?";
        db.query(q, [id], callback);
    },
    findUserByEmail: (email, callback) => {
        const query = "SELECT * FROM users WHERE email = ?";
        db.query(query, [email], callback);
    },//add
    getAllProducts: (callback) => {
        const query = "SELECT * FROM products";
        db.query(query, callback);
    },
    
    addToCart: (productId, quantity, sessionId, callback) => {
        const query = "INSERT INTO cart (product_id, quantity, session_id) VALUES (?, ?, ?)";
        db.query(query, [productId, quantity, sessionId], callback);
    },

    getCartItems: (sessionId, callback) => {
        const query = `SELECT cart.id, products.name, products.price, cart.quantity 
                       FROM cart 
                       JOIN products ON cart.product_id = products.id 
                       WHERE cart.session_id = ?`;
        db.query(query, [sessionId], callback);
    },

    processTransaction: (sessionId, callback) => {
        const query = `INSERT INTO transactions (product_id, quantity, total_price, session_id)
                       SELECT cart.product_id, cart.quantity, (products.price * cart.quantity), cart.session_id
                       FROM cart
                       JOIN products ON cart.product_id = products.id
                       WHERE cart.session_id = ?`;

        db.query(query, [sessionId], (err, results) => {
            if (err) return callback(err);

            // After recording the transactions, update the product quantity
            const updateQuery = `UPDATE products 
                                 JOIN cart ON products.id = cart.product_id
                                 SET products.quantity = products.quantity - cart.quantity
                                 WHERE cart.session_id = ?`;
            db.query(updateQuery, [sessionId], callback);
        });
    },

    clearCart: (sessionId, callback) => {
        const query = "DELETE FROM cart WHERE session_id = ?";
        db.query(query, [sessionId], callback);
    }
};

module.exports = information;