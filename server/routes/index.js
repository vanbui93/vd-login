var express = require('express');
var router = express.Router();
var pool = require('./connectdb');

//thêm đoạn dưới vào để xử lý lỗi CORS PROXY
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3456"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get('/api/users', function(req, res) {
  pool.connect(function(error){
    pool.query('SELECT * FROM users', (err, response) => {
      if(error) {  
        return console.error('error running query', err);
      } else {   
        res.send(response.rows);  
      }
      // pool.end();
    })
  })
});

module.exports = router;