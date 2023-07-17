// Toggle view password when logging in
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

const nameSearchInput = document.getElementById('name-search');
const nameSuggestions = document.getElementById('name-suggestions');

nameSearchInput.addEventListener('input', function () {
    const searchTerm = nameSearchInput.value;

    if (searchTerm.length >= 3) {
        // Make an AJAX request to the API route to get cocktail name suggestions
        fetch(`/api/name/${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                nameSuggestions.innerHTML = '';

                if (data.data && data.data.drinks) {
                    const suggestions = data.data.drinks;

                    suggestions.forEach(suggestion => {
                        const suggestionButton = document.createElement('button');
                        suggestionButton.textContent = suggestion.strDrink;
                        suggestionButton.addEventListener('click', function () {
                            // Handle the click event to favorite the selected cocktail name
                            favoriteCocktail(suggestion.idDrink);
                        });

                        nameSuggestions.appendChild(suggestionButton);
                    });
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        nameSuggestions.innerHTML = '';
    }
});

function favoriteCocktail(cocktailId) {
    // You can implement the logic to handle the favorite functionality here
    console.log(`Favorite cocktail with ID ${cocktailId}`);
}