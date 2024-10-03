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
        const query = "insert into products (name, description, price, stock_quantity) values(?,?,?,?)";
        db.query(query, [data.name, data.description, data.price, data.stock_quantity], callback);
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
    }
};

module.exports = information;