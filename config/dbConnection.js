const mysql = require("promise-mysql");

module.exports = async () => {
  return await mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b98a363b07af2c',
    password: '1d2c5681',
    database: 'heroku_d2458b5b17a2bd6',
  });
};

