const router = require('express').Router();
const request = require('request');
require('dotenv').config();
const {Favorite, User} = require('../models');


// get cocktails from NAME
router.get("/api/name/:Name", (req, res) => {
  const name = req.params.Name;

  request.get({
    url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
    headers: {
      'X-Api-Key': process.env.API_KEY
    },
  }, function (error, response, body) {
    if (error) {
      console.error('Request failed:', error);
      res.status(500).send('Request failed');
    } else if (response.statusCode !== 200) {
      console.error('Error:', response.statusCode, body.toString('utf8'));
      res.status(response.statusCode).send('Error');
    } else {
      const data = JSON.parse(body);
      const cocktails = data.map(cocktail => ({
        name: cocktail.name
      }));

      res.json({ data: cocktails });
    }
  });
});

// Add a favorite cocktail
router.put('/api/favorites/:id', (req, res) => {
  console.log(req.body)
  const { cocktailName } = req.body;
  const userId = req.session.user_id; 
  console.log(cocktailName, userId)

      Favorite.update({
        image_url: req.body.image_url
      }, {
        where: {
          id: req.params.id,
        }
      })
        .then(favorite => {
          res.json({
            message: 'Updated successfully'
          })
        })
        .catch(error => {
          console.error('Error:', error);
          res.status(500).send('Error');
        });
});

// Add fav
router.post('/api/favorites', (req, res) => {
  const userId = req.session.user_id;

  const { cocktailName, cocktailImage } = req.body;

  Favorite.create({
    cocktailName: cocktailName,
    userId: userId,
    cocktailImage: cocktailImage
  })
    .then(favorite => {
      res.json({
        message: 'Fav added successfully'
      });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Error occurred while saving the favorite cocktail');
    });
});


module.exports = router;
