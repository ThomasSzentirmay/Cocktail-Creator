// Toggle view password when logging in
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Fetching cocktails
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     const ingredientInput = document.getElementById('ingredient-search');
//     const nameInput = document.getElementById('name-search');
//     const cocktailsContainer = document.getElementById('user-cocktails-container');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault(); // Prevent the form from submitting normally

//         const ingredient = ingredientInput.value.trim();
//         const name = nameInput.value.trim();

//         if (ingredient || name) {
//             if (ingredient) {
//                 fetch(`/api/ingredients/${encodeURIComponent(ingredient)}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         // Handle the response data
//                         renderCocktails(data);
//                     })
//                     .catch(error => {
//                         console.error('Error:', error);
//                     });
//             } else {
//                 fetch(`/api/name/${encodeURIComponent(name)}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         // Handle the response data
//                         renderCocktails(data);
//                     })
//                     .catch(error => {
//                         console.error('Error:', error);
//                     });
//             }
//         }
//     });

//     function renderCocktails(data) {
//         // Clear the previous content
//         cocktailsContainer.innerHTML = '';

//         // Render the cocktails
//         const cocktails = JSON.parse(data.data);
//         cocktails.forEach(cocktail => {
//             const cocktailElement = document.createElement('div');
//             cocktailElement.textContent = cocktail.name;
//             cocktailsContainer.appendChild(cocktailElement);
//         });
//     }
// });
