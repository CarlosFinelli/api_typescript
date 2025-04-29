const mysql = require('mysql2');

// Cria um pool de conexões (muito melhor)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pessoas',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
