// Functionality to change pg background image:
const backgrounds = [
    'https://images.unsplash.com/photo-1508496869408-df596454df1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIwbWV4aWNvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIwbWV4aWNvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1570836173003-302a79cf1a33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIwbWV4aWNvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1553002371-3753e25032b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMG1leGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1534312663388-244b6be22824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldyUyMG1leGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1612824266241-9b810de083f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIwbWV4aWNvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1517025423291-770fb99ae547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FjdHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1508893269700-a6c62c0610a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRlc2VydCUyMHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
]

const setBG = () => {
    let randNum = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = 'url(' + backgrounds[randNum] + ')'; 
}
setBG();

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