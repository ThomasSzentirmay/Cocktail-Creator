const router = require('express').Router();
const User = require('../models/User');
// const Cocktail = require('../models/Cocktail')

function isAuthenticated(req, res, next) {
  const isAuthenticated = req.session.user_id;
  if (!isAuthenticated) return res.redirect('/login');
  next();
}
// Show Homepage
router.get('/', async (req, res) => {
  // let cocktails = await Cocktail.findAll({
  //   include: User
  // });

  res.render('index', {
    isHome: true,
    isLoggedIn: req.session.user_id,
    ageVerified: req.session.ageVerified
    // cocktails: cocktails
  });
});

// Verify Age
router.get('/verify', (req, res) => {
  req.session.ageVerified = true; // Set the age verification status in the session
  res.redirect('/'); // Redirect back to the homepage
});

// Show Login Page
router.get('/login', (req, res) => {
  if (req.session.user_id) return res.redirect('/dashboard')
  return res.render('login', {
    isLogin: true,
    ageVerified: req.session.ageVerified
  });
});
// Show Register Page
router.get('/register', (req, res) => {
  if (req.session.user_id) return res.redirect('/dashboard')
  res.render('register', {
    isRegister: true,
    ageVerified: req.session.ageVerified
  });
});
// Show Dashboard Page
router.get('/dashboard', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    // Fetch the user's cocktails
    // const cocktails = await Cocktail.findAll({
    //   where: { userId: user.id },
    // });

    res.render('dashboard', {
      userName: user.userName,
      ageVerified: req.session.ageVerified
      // cocktails
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

