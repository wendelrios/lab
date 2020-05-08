const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
  res.sendFile('../html/login.html')
  return next();
});

module.exports = {router}