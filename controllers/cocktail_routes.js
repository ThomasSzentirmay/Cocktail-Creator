const router = require('express').Router();
const User = require('../models/User');
const Cocktail = require('../models/Cocktail');

function isAuthenticated(req, res, next) {
  const isAuthenticated = req.session.user_id;

  if (!isAuthenticated) return res.redirect('/login');

  next();
}


// Add a Cocktail
router.post('/cocktail', isAuthenticated, async (req, res) => {
  await Cocktail.create({
    text: req.body.text,
    userId: req.session.user_id
  });

  res.redirect('/dashboard');
});

module.exports = router;