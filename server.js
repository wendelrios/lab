const express = require('express');
const {Pool, Client} = require('pg')

// pools will use environment variables
// for connection information
const pool = new Pool();




const app = express();

const port = 3000;

app.listen(port)

app.use(express.json())



