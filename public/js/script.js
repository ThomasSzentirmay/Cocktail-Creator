// Toggle view password when logging in
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}


// Drink search options when typing
const nameSearchInput = document.getElementById('name-search');
const nameSuggestions = document.getElementById('name-suggestions');

nameSearchInput.addEventListener('input', function () {
    const searchTerm = nameSearchInput.value;

    if (searchTerm.length >= 3) {
        fetch(`/api/name/${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                nameSuggestions.innerHTML = '';

                if (data.data) {
                    const suggestions = data.data;

                    suggestions.forEach(suggestion => {
                        const suggestionButton = document.createElement('button');
                        suggestionButton.textContent = suggestion.name;
                        suggestionButton.classList.add('btn-large');
                        suggestionButton.classList.add('space'); 
                        suggestionButton.addEventListener('click', function () {
                            favoriteCocktail(suggestion.id);
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
    console.log(`Favorite cocktail with ID ${cocktailId}`);
}
