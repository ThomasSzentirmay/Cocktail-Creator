// JD TIPS
app.post('/drink', (req, res) => {
    Drink.create({
        userId: req.session.user_id,
        name: req.body.drink_name
    }).then(newDrink => {
        res.redirect('/dashboard');
    });
});

app.get('/dashboard', (req, res) => {
    User.findByPk(req.session.user_id, {
        include: Drink
    }).then(user => {
        res.render('dashboard', {
            drinks: user.drinks.map(d => d.get({ plain: true }))
        })
    })
})