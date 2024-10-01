const db = require('../config/db');
const information = {
    save:(data, callback) =>{
        const query = "insert into users (full_name, email, password) values(?,?,?)";
        db.query(query, [data.full_name, data.email, data.password], callback);
    },
    message:(data, callback) =>{
        const query = "insert into message (name, email, subject, message) values(?,?,?,?)";
        db.query(query, [data.name, data.email, data.subject, data.message], callback);
    }
};

module.exports = information;