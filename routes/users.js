const express = require('express');

const sha256 = require('sha256');
const router = express.Router();

const { User } = require('../db/models')
const { checkUser, showBody, deepCheckUser } = require('../middleware/allMiddleware');


//============================================================================================================================
//РЕГИСТРАЦИЯ
//users/signup


//============================================================================================================================
router.get('/signin', (req, res) => {
  res.render('signin');
});

router.post('/signin', showBody, async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  console.log(sha256(req.body.password));
  const user = await User.findOne({ where: { email } }); // ищем в бд юзера по почте
  if (!user) {
    return res.redirect('/users/signup');
  }
  if (user.password === sha256(req.body.password)) { // если шифрованный пароль из бд совпадает с зашифрованным тем что ввел юзер
    req.session.userEmail = user.email;
    req.session.userId = user.id;
    res.redirect(`/users/profile/${user.id}`);
  } else {
    res.send(`wrong pasword`);
  }
});

router.get('/profile/:id', checkUser, deepCheckUser, async (req, res) => { // проходим мидлверы и попадаем в профиль
  const user = await User.findByPk(req.params.id);
  res.render('profile', { user });
});



router.get('/logout', (req, res) => {
  // при logout сессия удаляется из папки sessions
  req.session.destroy();
  res.clearCookie('userCookie');
  res.redirect('/');
});






module.exports = router;
