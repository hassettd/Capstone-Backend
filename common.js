// common.js
const { Client } = require("pg");

// Initialize the PostgreSQL client
const client = new Client({
  user: "danielhassett", // Your PostgreSQL username
  host: "localhost", // Host of your database (use 'localhost' or IP address)
  database: "watchstore", // Your database name
  password: "", // Your PostgreSQL password (leave empty if no password)
  port: 5432, // Default PostgreSQL port
});
