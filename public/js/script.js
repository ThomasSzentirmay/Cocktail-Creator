
$(document).ready(() => {
    const selectedIngredients = [];

    const fetchIngredientSuggestions = async (searchTerm) => {
        try {
            const response = await $.ajax({
                url: `https://api.api-ninjas.com/v1/ingredients?search=${searchTerm}`,
                headers: { 'X-Api-Key': '6zgximvyjWj9Nafs2JwscxhhNDaumMnBfFu6A3Ww' },
                method: 'GET',
                dataType: 'json',
            });
            return response.results;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const displayIngredientSuggestions = (suggestions) => {
        const suggestionList = $('#ingredient-suggestions');
        suggestionList.empty();

        suggestions.forEach((suggestion) => {
            const suggestionItem = $('<div>').addClass('suggestion').text(suggestion.name);

            suggestionItem.on('click', () => {
                addIngredientToSelection(suggestion);
            });

            suggestionList.append(suggestionItem);
        });
    };

    const addIngredientToSelection = (ingredient) => {
        selectedIngredients.push(ingredient);
        displaySelectedIngredients();
    };

    const displaySelectedIngredients = () => {
        const selectedIngredientsContainer = $('#selected-ingredients');
        selectedIngredientsContainer.empty();

        selectedIngredients.forEach((ingredient) => {
            const ingredientItem = $('<div>').text(ingredient.name);
            selectedIngredientsContainer.append(ingredientItem);
        });
    };

    const fetchPossibleCocktails = async () => {
        try {
            const response = await $.ajax({
                url: `https://api.cocktailninja.com/cocktails?ingredients=${selectedIngredients.join(',')}`,
                method: 'GET',
                dataType: 'json',
            });
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const displayCocktailDetails = (cocktail) => {
        const cocktailDetailsContainer = $('#cocktail-details');
        cocktailDetailsContainer.empty();

        const cocktailName = $('<h3>').addClass('cocktail-name').text(cocktail.name);
        const cocktailIngredients = $('<p>').addClass('cocktail-ingredients').text(cocktail.ingredients.join(', '));
        const cocktailRecipe = $('<p>').addClass('cocktail-recipe').text(cocktail.recipe);
        const cocktailImage = $('<img>').addClass('cocktail-image').attr('src', cocktail.image).attr('alt', 'Cocktail Image');

        cocktailDetailsContainer.append(cocktailName, cocktailIngredients, cocktailRecipe, cocktailImage);
    };

    $('#ingredient-search').on('input', async (event) => {
        const searchTerm = $(event.target).val();

        if (searchTerm.length > 0) {
            try {
                const suggestions = await fetchIngredientSuggestions(searchTerm);
                displayIngredientSuggestions(suggestions);
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            $('#ingredient-suggestions').empty();
        }
    });

    $('#fetch-cocktails').on('click', async () => {
        try {
            const cocktails = await fetchPossibleCocktails();
            if (cocktails.length > 0) {
                const selectedCocktail = cocktails[0];
                displayCocktailDetails(selectedCocktail);
            } else {
                console.log('No cocktails found');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

// var name = 'vodka'
// var ingredients = 'champagne'

// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/cocktail?ingredients=' + ingredients,
//     headers: { 'X-Api-Key': '6zgximvyjWj9Nafs2JwscxhhNDaumMnBfFu6A3Ww'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });



// SHOW PASSWORD IN LOGIN FUNCTIONALITY
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

