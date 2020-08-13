var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); //bcrypt là 1 thư viên giúp băm mật khẩu
// import config from './config';


var pool = require('./connectdb');

//thêm đoạn dưới vào để xử lý lỗi CORS PROXY
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3456"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/api/auth', function (req, res) {
  pool.connect(function (error) {
    const { username, password } = req.body;
    var sql = "SELECT id,username, password FROM users where username='" + username + "' AND password='" + password + "'";
    pool.query(sql, (err, user) => {
      if (user) {
        //NẾU REQUEST THÀNH CÔNG TRẢ VỀ TOKEN
        // const password_digest = bcrypt.hashSync(response.rows[0].password, 10); //mã hóa password
        if (user.rows[0].id && user.rows[0].username) { //nếu tồn tại id,username
          const token = jwt.sign({
            id: user.rows[0].id,
            username: user.rows[0].username,
          }, 'somesecretkeyforjsonwebtoken');  //B2 create a JWT somesecretkeyforjsonwebtoken => là 1 secret mà server sẽ trả về cho client

          res.json({ token });
        }
      } else {
        // res.status(401).json({ error: 'Invalid Creadentials' })
        return console.error('Invalid Creadentials', err);
      }
      // pool.end();

    })
  })
});


router.post('/api/users/register', (req, res, next) => {
  pool.connect(function (error) {   // phải có pool.connect ở đây thì mới được
    var username = req.body.username,
      email = req.body.email,
      password = req.body.password;
    passwordConfirmation = req.body.passwordConfirmation;
    timezone = req.body.timezone;
    chkbStatus = req.body.chkbStatus;
    sql = "insert into users (username,email,password,passwordConfirmation,timezone,chkbStatus) values ($1,$2,$3,$4,$5,$6) RETURNING username,email,password,passwordConfirmation,timezone,chkbStatus";
    pool.query(sql, [username, email, password, passwordConfirmation, timezone, chkbStatus], (error, response) => {
      if (error) {  // nếu lỗi thì trả về error
        return console.error('error running query', error);
      } else {   // Nếu thành công trả về response
        // console.log(response.rows[0]);
        res.send(response.rows[0]);
      }
    })
  })
});

module.exports = router;