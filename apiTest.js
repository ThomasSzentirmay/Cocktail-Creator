// const axios = require("axios");
// async function getData(){
//     try{
//         const data = await axios.get({
//             url: `https://api.api-ninjas.com/v1/cocktail?ingredients=${"vodka"}`,
//             headers: { 'X-Api-Key': '6zgximvyjWj9Nafs2JwscxhhNDaumMnBfFu6A3Ww' },
//             method: 'GET'
//         });
//         console.log(data)

//     } catch(err) {
//         console.log(err)
//     }

// };

// getData()
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

application.get('/drink/:drinkName', (req,res) => {
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
      res.render('singledrink', {...data})
})

const request = require('request');
var name = 'bloody mary';