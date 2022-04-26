const mysql = require('mysql');
function connection (sql,cb){
    let config = {
        host: 'localhost',
        user: 'root',
        password:'123456',
        database: 'first-schema',
        port: 3306
    }
    let connection = mysql.createConnection(config);
    connection.connect();
    connection.query(sql, cb)
    connection.end();
}
module.exports = connection;
