var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

var pool = require('./connectdb');

//thêm đoạn dưới vào để xử lý lỗi CORS PROXY
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3456"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/api/users', function (req, res) {
  pool.connect(function (error) {
    const { username, password } = req.body;
    var sql = "SELECT username, password FROM users where username='" + username + "' AND password='" + password + "'";
    pool.query(sql, (err, response) => {
      if (error) {
        return console.error('error running query', err);
      } else {        
        res.send(response.rows[0]);
        console.log(response.rows[0]);
      }
      // pool.end();
    })
  })
});

module.exports = router;