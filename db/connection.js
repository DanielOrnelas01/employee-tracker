const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Ihatehomework22@',
      database: 'employee_db'
    }
  );

  module.exports = db