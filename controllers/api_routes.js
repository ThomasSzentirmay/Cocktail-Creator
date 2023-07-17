const express = require('express');
const app = express();
const request = require('request');
require('dotenv').config();

// get cocktails from NAME
app.get("/api/name/:Name", (req, res) => {

    const name = 'bloody';
    
    request.get({
      url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
      headers: {
        'X-Api-Key': process.env.API_KEY
      },
    }, function(error, response, body) {
      if (error) {
        console.error('Request failed:', error);
        res.status(500).send('Request failed');
      } else if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode, body.toString('utf8'));
        res.status(response.statusCode).send('Error');
      } else {
        console.log(body);
        res.json({ data: body }); 
      }
    });
});

// get cocktails from INGREDIENT
app.get("/api/ingredients/:Ing", (req, res) => {

  const ing = 'lemon juice';
  
  request.get({
    url: 'https://api.api-ninjas.com/v1/cocktail?ingredients=' + ing,
    headers: {
      'X-Api-Key': process.env.API_KEY
    },
  }, function(error, response, body) {
    if (error) {
      console.error('Request failed:', error);
      res.status(500).send('Request failed');
    } else if (response.statusCode !== 200) {
      console.error('Error:', response.statusCode, body.toString('utf8'));
      res.status(response.statusCode).send('Error');
    } else {
      console.log(body);
      res.json({ data: body }); 
    }
  });
});

module.exports = app;