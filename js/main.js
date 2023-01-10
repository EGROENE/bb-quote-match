// Functionality to change pg background image:
const backgrounds = [
    './assets/bg-one.jpg',
    './assets/bg-four.jpg'
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
    { name: 'Gus Fring', imageURL: './assets/gus-fring.jpg', quote: 'And a man, a man provides. And he does it even when he’s not appreciated, or respected, or even loved. He simply bears up and he does it. Because he’s a man.'},
    { name: 'Hank Schrader', imageURL: './assets/hank-schrader.jpg', quote: 'You’re the smartest guy I’ve ever met. And you’re too stupid to see… he made up his mind ten minutes ago.'},
    { name: 'Jane Margolis', imageURL: './assets/jane-margolis.jpg', quote: 'Why should we do anything more than once? Should I just smoke this one cigarette? Maybe we should only have sex once if it’s the same thing? Should we just watch one sunset? Or live just one day? Because it’s new every time. Each time is a new experience.'},
    { name: 'Jesse Pinkman', imageURL: './assets/jesse-pinkman.jpg', quote: 'Ah, like I came to you, begging to cook meth. Oh, hey, nerdiest old dude I know, you wanna come cook crystal? Please. I’d ask my diaper-wearing granny, but her wheelchair wouldn’t fit in the RV.'},
    { name: 'Mike Ehrmantraut', imageURL: './assets/mike-ehrmantraut.jpg', quote: 'Just because you shot Jesse James, don’t make you Jesse James.'},
    { name: 'Saul Goodman', imageURL: './assets/saul-goodman.jpg', quote: 'If you’re committed enough, you can make any story work.'},
    { name: 'Skinny Pete', imageURL: './assets/skinny-pete.jpg', quote: 'Zombies are dead, man! What difference does it make what their job was when they was living?'},
    { name: 'Skyler White', imageURL: './assets/skyler-white.jpg', quote: 'Someone needs to protect this family from the man who protects this family.'},
    { name: 'Tuco Salamanca', imageURL: './assets/tuco-salamanca.jpg', quote: 'This kicks like a mule with its balls wrapped in duct tape!'},
    { name: 'Walter White, Jr.', imageURL: './assets/walter-white-jr.jpg', quote: 'Do I look like a skater?'},
    { name: 'Walter White', imageURL: './assets/walter-white.jpg', quote: 'What I came to realize is that fear, that’s the worst of it. That’s the real enemy. So, get up, get out in the real world and you kick that bastard as hard you can right in the teeth.'},
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