// var name = 'vodka'
var ingredients = 'champagne'

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cocktail?ingredients=' + ingredients,
    headers: { 'X-Api-Key': '6zgximvyjWj9Nafs2JwscxhhNDaumMnBfFu6A3Ww'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});