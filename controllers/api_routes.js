const express = require('express');
const app = express();
const request = require('request');

app.get("/api/ingredients/:Name", (req, res) => {

    const name = 'bloody';
    
    request.get({
      url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
      headers: {
        'X-Api-Key': '6zgximvyjWj9Nafs2JwscxhhNDaumMnBfFu6A3Ww'
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