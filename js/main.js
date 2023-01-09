// Get the area where cards are to be displayed:
const cardArea = document.getElementById('card-area');

// Array containing all info on all chars, each in its own object:
const allChars = [
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
]

// Function to display cards containing each char's image and name:
// Add data-name to each char card:
function displayCharsNameImage() {
    for (let char of allChars) {
        cardArea.innerHTML += "<div class='info-card' data-name='" + char.name.toLowerCase().replace(/ /g, '-') + "'>"
        + "<img src='" + char.imageURL + "'>"
        + "<p>" + char.name + "</p>"
        + "</div>"
    }
}
displayCharsNameImage();

// Function to display cards containing each char's quote:
// Add data-name to each quote card:
function displayCharsQuote() {
    for (let char of allChars) {
        cardArea.innerHTML += "<div class='quote-card' data-name='" + char.name.toLowerCase().replace(/ /g, '-') + "'>"
        + "<p>" + char.quote + "</p>"
        + "</div>"
    }
}
displayCharsQuote();