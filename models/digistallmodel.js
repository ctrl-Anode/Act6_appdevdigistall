const db = require('../config/db');
const information = {
    save:(data, callback) =>{
        const query = "insert into users (full_name, email, password) values(?,?,?)";
        db.query(query, [data.full_name, data.email, data.password], callback);
    }
};

module.exports = information;

/*const db = require('../config/db');

const information = {
    save: (data, callback) => {
        const query = "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)";
        db.query(query, [data.full_name, data.email, data.password], (err, result) => {
            if (err) return callback(err);
            // Return the user object with id, full_name, and email
            callback(null, { id: result.insertId, full_name: data.full_name, email: data.email });
        });
    },

    login: (email, password, callback) => {
        const query = "SELECT id, full_name, email FROM users WHERE email = ? AND password = ?";
        db.query(query, [email, password], (err, results) => {
            if (err) return callback(err);
            if (results.length === 0) return callback(new Error('Invalid credentials'));
            callback(null, results[0]);
        });
    },

    // You can add more methods here as needed
};

module.exports = information;*/