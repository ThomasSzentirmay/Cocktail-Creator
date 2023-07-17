const router = require('express').Router();
const User = require('../models/User')
// const Cocktail = require('../models/Cocktail')

function isAuthenticated(req, res, next) {
    const isAuthenticated = req.session.user_id;

    if (!isAuthenticated) return res.redirect('/login');

    next();
}


// Add a Cocktail
router.post('/cocktail', isAuthenticated, async (req, res) => {
    try {
        const { name } = req.body;
        const { file } = req.files;
        const { user_id } = req.session;

        const newCocktail = await Cocktail.create({
            name,
            uploadedBy: user_id,
            image: '/path/to/cocktail-image.jpg', 
        });

        res.redirect('/dashboard');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;