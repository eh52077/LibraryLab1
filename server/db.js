const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',    
  password: '',       
  database: 'librarylab1'
});

module.exports = pool.promise();
