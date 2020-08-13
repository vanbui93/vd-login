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

// router.post('/api/users', (req, res) => {
//     const { username, password } = req.body;
//     pool.query({
//       where: { username: username },
//       orWhere: { email: username }
//     }).fetch().then(user => {
//       if (user) {
//         if (bcrypt.compareSync(password, user.get('password'))) {
//           const token = jwt.sign({
//             id: user.get('id'),
//             username: user.get('username')
//           },'somesecretkeyforjsonwebtoken');
//           res.json({ token });
//         } else {
//           res.status(401).json({ errors: 'Invalid Credentials' })
//         }
//       } else {
//         res.status(401).json({ errors: 'Invalid Credentials' })
//       }
//     })
// })

router.post('/api/users', function (req, res) {
  pool.connect(function (error) {
    const { username, password } = req.body;
    var sql = "SELECT id,username, password FROM users where username='" + username + "' AND password='" + password + "'";
    pool.query(sql, (err, user) => {
      if (user) {
        //NẾU REQUEST THÀNH CÔNG TRẢ VỀ TOKEN
        // const password_digest = bcrypt.hashSync(response.rows[0].password, 10); //mã hóa password
        const token = jwt.sign({
          id: user.rows[0].id,
          username: user.rows[0].username,
        }, 'somesecretkeyforjsonwebtoken');  //somesecretkeyforjsonwebtoken => là 1 secret mà server sẽ trả về

        res.json({ token });
      } else {
        // res.status(401).json({ error: 'Invalid Creadentials' })
        return console.error('Invalid Creadentials', err);
      }
      // pool.end();

    })
  })
});

module.exports = router;