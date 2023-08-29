const path = require('path');

const express = require('express');

const userRoutes = require('./routes/users');
const db = require('./data/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/images', express.static('images')); // /images로 시작하는 경로가 있는 서버에 요청이 도달하는경우에만 해당 미들웨어가 활성화

app.use(userRoutes);

db.connectToDatabase().then(function () {
  app.listen(3000);
});
