const {Pool, Client} = require('pg')

const pool = new Pool({
  user:'postgres',
  host:'localhost',
  database:'api',
  password:'wendel12',
  port:5432
})

module.exports = {pool}