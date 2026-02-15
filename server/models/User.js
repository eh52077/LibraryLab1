const db = require('../config/db');

// Gjej user sipas email
exports.findByEmail = async (email) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};

// Krijo user të ri
exports.createUser = async (username, email, hashedPassword) => {
  const [result] = await db.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword]
  );
  return result;
};

// Gjej user sipas ID
exports.findById = async (id) => {
  const [rows] = await db.query(
    'SELECT id, username, email FROM users WHERE id = ?',
    [id]
  );
  return rows[0];
};
