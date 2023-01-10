// Get the area where cards are to be displayed:
const cardArea = document.getElementById('card-area');

// Array containing all info on all chars, each in its own object:
const allChars = [
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
]

// Randomize order of allChars:

// Function to display cards containing each char's image and name:
// Add data-name to each char card:
function displayCharsNameImage() {
    for (let i = 0; i < allChars.length - (allChars.length - 6); i++) {
        cardArea.innerHTML += "<div class='info-card' data-name='" + allChars[i].name.toLowerCase().replace(/ /g, '-') + "'>"
        + "<div class='img-container'>"
        + "<img src='" + allChars[i].imageURL + "'>"
        + "</div>"
        + "<p>" + allChars[i].name + "</p>"
        + "</div>"
    }
}
displayCharsNameImage();

// Function to display cards containing each char's quote:
// Add data-name to each quote card:
function displayCharsQuote() {
    for (let i = 0; i < allChars.length - (allChars.length - 6); i++) {
        cardArea.innerHTML += "<div class='quote-card' data-name='" + allChars[i].name.toLowerCase().replace(/ /g, '-') + "'>"
        + "<p>" + allChars[i].quote + "</p>"
        + "</div>"
    }
}
displayCharsQuote();

// Add function to randomize order in which the cards will display (DOM elements)

// Add EL to add each card to 'selectedCards' array
// The name, img, or quote, depending on the type of card, should no longer be hidden (remove hidden class from card)
// After the length of selectedCards is 2 & datanames are not equal, automatically del both from array & restore original styling after a few secs
// If length of selectedCards is 2 & both cards' datanames are equal, display congratulatory message and disable both cards or change hover to red circle w/ line thru it