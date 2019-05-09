const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect( err => {
  if (err) throw err;
  else console.log(`connected to ${mysqlConfig.database} database!`)
})

module.exports = connection