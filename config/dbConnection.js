const mysql = require("promise-mysql");

module.exports = async () => {
  return await mysql.createConnection({
    // host: 'us-cdbr-east-05.cleardb.net',
    // user: 'b98a363b07af2c',
    // password: '1d2c5681',
    // database: 'heroku_d2458b5b17a2bd6',
    host: 'ec2-18-119-134-227.us-east-2.compute.amazonaws.com',
    user: 'dashboard-user-node',
    password: 'dashboarD_2022',
    database: 'dashboard',
  });
};

