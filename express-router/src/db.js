const mysql = require('mysql2/promise')

async function connectToDb() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wave',
  })

  const result = await connection.query('select * from terminales')
  console.log(result)
}
module.exports = connectToDb
