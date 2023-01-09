// Get the area where cards are to be displayed:
const cardArea = document.getElementById('card-area');

// Array containing all info on all chars, each in its own object:
const allChars = [
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: 'Darth Vader had responsibilities. He was responsible for the Death Star.'},
]

// Function to put chars' data (name, img) into array
// This will be used to populate the cards containing each char's info (name, img)
const charsInfo = [];
function charsInfoIntoArray() {
    for (let char of allChars) {
        let charInfoObject = { name: char.name, imageURL: char.imageURL };
        charsInfo.push(charInfoObject);
    }
}
charsInfoIntoArray();
console.log(charsInfo);

// Function to display cards containing each char's image and name:
// Add data-name to each char card:
function displayCharsData() {
    for (let char of charsInfo) {
        cardArea.innerHTML += "<div class='char-card-data' data-name='" + char.name.toLowerCase().replace(/ /g, '-') + "'>"
        + "<img src='" + char.imageURL + "'>"
        + "<p>" + char.name + "</p>"
        + "</div>"
    }
}
displayCharsData();

// Function to put each char's quote into array
// This will be used to populate the quote cards
const charQuotes = [];
function charQuoteIntoArray() {
    for (let char of allChars) {
        charQuotes.push(char.quote);
    }
}
charQuoteIntoArray();
console.log(charQuotes);

// Function to display cards containing char's quote:
// Add data-name to each char card:
function displayCharsQuote() {
    for (let char of charsQuotes) {
        cardArea.innerHTML += "<div class='quote-card' data-name='" + char.name.toLowerCase().replace(/ /g, '-') + "'>"
        + "<p>" + char.quote + "</p>"
        + "</div>"
    }
}
displayCharsQuote();