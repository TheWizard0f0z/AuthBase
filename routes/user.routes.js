const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  res.render('logged');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
