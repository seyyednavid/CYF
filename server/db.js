const { Pool } = require("pg");
require("dotenv").config();

// const pool = new Pool({
// //   user: test_user,
//   password: brPuPTuw711AtGoFdGoz29BmgzPjA2bF,
//   host: dpg-ck2nqj36fquc73e2m53g-a,
//   port: 5432,
//   database: cyf_v7hu,
// });

const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false },
  });
module.exports = pool;