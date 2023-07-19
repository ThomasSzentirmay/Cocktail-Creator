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

if (nameSearchInput) {
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

                            nameSuggestions.appendChild(suggestionButton);
                            suggestionButton.addEventListener('click', function (event) {
                                event.preventDefault()
                                console.log(isLoggedIn)
                                if (isLoggedIn) {
                                    console.log(suggestion);
                                    favoriteCocktail(suggestion);
                                }
                            });
                        });
                    }
                })
                .catch(error => console.error('Error:', error));
        } else {
            nameSuggestions.innerHTML = '';
        }
    });
}

function favoriteCocktail(cocktail) {

    fetch('/api/favorites', {
        method: "POST",
        body: JSON.stringify({
            cocktailName: cocktail.name,
            cocktailIng: cocktail.ingredients.join(', '),
            cocktailInst: cocktail.instructions
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        window.location = '/dashboard';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// Materialize
$('.collapsible').collapsible();