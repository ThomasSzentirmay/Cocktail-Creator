$(document).ready(function() {
    var name = 'martini';

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/cocktail?ingredients=' + name,
        headers: {
            'X-Api-Key': 'uzXoqXKJQzocibLJBGGrFw==5EMXvqAyhQA7R36e'
        },
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            var instructions = result[0].instructions;
            console.log('Instructions:', instructions);
        },
        error: function(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
});