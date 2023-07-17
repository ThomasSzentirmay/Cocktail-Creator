application.get("/api/ingredients/:ingName", (req, res) => {
    
    request.get({
      url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
      headers: {
        'X-Api-Key': '6zgximvyjWj9Nafs2JwscxhhNDaumMnBfFu6A3Ww'
      },
    }, function(error, response, body) {
      if(error) return console.error('Request failed:', error);
      else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
      else console.log(body)
    });

    res.json({...data})

})