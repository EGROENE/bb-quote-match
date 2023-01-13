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

// On click of 'start' button in welcome box, hide welcome box and display #in-game-header & #card-area:
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function() {
    document.getElementsByTagName('main')[0].style.height = '100%';
    document.getElementById('welcome-box').style.display = 'none';
    document.getElementById('in-game-header').style.display = 'flex';
    document.getElementById('card-area').style.display = 'grid';
})

// Get the area where cards are to be displayed:
const cardArea = document.getElementById('card-area');

// Array for each char, containing multiple quotes:
const badgerQuotes = [
    'Darth Vader had responsibilities. He was responsible for the Death Star.',
    'You are Willy Wonka, & I got the Golden Ticket! Put me on your magical boat, man! Sail me down your chocolatey river of meth!',
    'You a cop?',
    'Dude, you are so historically retarded.',
    'You are a genius, bro. This kankenstein is unreal.'
]

const gusFringQuotes = [
    'You are a wealthy man now. One must learn to be rich. To be poor, anyone can manage.',
    'I investigate everyone with whom I do business. What careful man wouldn\'t?',
    'I hide in plain sight, same as you.',
    'And a man, a man provides. And he does it even when he\'s not appreciated, or respected, or even loved. He simply bears up and he does it. Because he\'s a man.',
    'Little Rata...what a reputation to leave behind.'
]

const hankSchraderQuotes = [
    'You’re the smartest guy I\'ve ever met. And you\'re too stupid to see… he made up his mind ten minutes ago.',
    'I\'ve seen better acting in an epileptic whorehouse.',
    'Does the Pope shit in his hat?',
    'Sit down! Sit your ass down! Comprende! Siéntate!',
    'Now look buddy, the last thing I want to do is get you in hot water, but some meth monkey had a feeding frenzy in here.',
    'I swear to Christ — I will put you under the jail.',
    'Tagging trees is a lot better than chasing monsters.',
    'Well, at least he didn\'t shit himself this time. Guess that\'s progress.',
    'Sometimes, the forbidden fruit tastes the sweetest.'
]

const janeMargolisQuotes = [
    'Why should we do anything more than once? Should I just smoke this one cigarette? Maybe we should only have sex once if it\'s the same thing? Should we just watch one sunset? Or live just one day? Because it\'s new every time. Each time is a new experience.',
    'Do right by Jesse tonight, or I will burn you to the ground.',
    'I\'ve gone where the Universe takes me my whole life. It\'s better to make those decisions yourself.',
    'Wow, that was so sweet. I think I threw up in my mouth a little.',
]

const jessePinkmanQuotes = [
    'Ah, like I came to you, begging to cook meth. Oh, hey, nerdiest old dude I know, you wanna come cook crystal? Please. I\'d ask my diaper-wearing granny, but her wheelchair wouldn\'t fit in the RV.',
    'Yeah Mr. White! You really do have a plan! Yeah science!',
    'Nah come on… man, some straight like you giant stick up his ass all of a sudden at age what, 60, he\'s just going to break bad?',
    'Hey, you girls want to meet my fat stack?',
    'What good is being an outlaw when you have responsibilities?',
    'You got me riding shotgun to every dark anal recess of this state. It\'d be nice if you clued me in a little.',
    'Yo 148, 3-to-the-3-to-the-6-to-the-9. Representin\' the ABQ. What up, biatch? Leave it at the tone!',
    'This is my own private domicile and I will not be harassed…bitch!',
    'Are we in the meth business, or the money business?',
    'Yeah. Totally Kafkaesque.',
    'So roll me further, bitch.'
]

const mikeEhrmantrautQuotes = [
    'Just because you shot Jesse James, don\'t make you Jesse James.',
    'I assure you that I can kill you from way over here if it makes you feel any better.',
    'You are a time bomb.',
    'Everyone sounds like Meryl Streep with a gun to their head.',
    'If you want me to read that, I\'m gonna need my glasses.',
    'You know how they say, "It\'s been a pleasure?" It hasn\'t.'
]

const saulGoodmanQuotes = [
    'If you\'re committed enough, you can make any story work.',
    'Walt told me you took a run at this Bogdan character, and he wrestled you into submission with is eyebrows.',
    'Congratulations! You\'re now officially the cute one of the group.',
    'Congratulations, you\'ve just left your family a second-hand Subaru.',
    'Don\'t drink and drive. But if you do, call me.',
    'Celebrities have to get their cars washed just like everybody else.',
    'Schrader\'s hard-on for you just reached Uncle Milton proportions, so have fun with that.',
    'Look, let\'s start with some tough love, alright? Ready for this? Here it goes: you two suck at peddling meth.',
    'Conscience gets expensive, doesn\'t it?',
    'Did you not plan for this contingency? I mean, the Starship Enterprise had a self-destruct button. I\'m just saying.',
    'There\'s no honor among thieves… except for us, of course.'
]

const skinnyPeteQuotes = [
    'Zombies are dead, man! What difference does it make what their job was when they was living?',
    'Hey man, I\'m slinging mad volume & fat benjis. I can\'t be all about spelling.',
    'The dude that comes out on the other side...he\'s not you. He\'s a color Xerox.',
    'I\'m pretty sure I seen the exact paint job on a Lexus.',
    'You mean, this is not, like, just recreational?',
    'The whole thing feels kinda shady, morality-wise.'
]

const skylerWhiteQuotes = [
    'Someone needs to protect this family from the man who protects this family.',
    'We\'ve come this far..what\'s one more?',
    'When I put everything into Quicken, nothing flashed red, so that\'s gotta mean it\'s OK, right?',
    'Marie - shut up!',
    'If I have to hear one more time that you did this for the family...'
]

const tucoSalamancaQuotes = [
    'This kicks like a mule with its balls wrapped in duct tape!',
    'I like doing business with a family man. There\'s always a lot of collateral.',
    "Sometimes you gotta rob to keep your riches.",
    "Blue, yellow, pink, whatever man. Just keep bringing me that.",
    "Tell me what you did!",
    "Talk is talk, but owing me money, that's bad.",
    "Are you saying that I'm stupid? Is that it? Is that what you're doing?",
    "I hate chili powder!",
    "Do something! You're smart, right? Do that thing!"
]

const waltJrQuotes = [
    'Do I look like a skater?',
    "I don't know what your problem is. You may not love him anymore, but I do!",
    "But I kept up, right? I drank three.",
    "So were you lying then, or are you lying now? Which lie is it?",
    "Then why don't you just die already?",
    "All this that I've been through, & you're scared of a little chemotherapy?",
    "If all this is true & you knew about it, then you're as bad as him."
]

const walterWhiteQuotes = [
    'What I came to realize is that fear, that\'s the worst of it. That\'s the real enemy. So, get up, get out in the real world and you kick that bastard as hard you can right in the teeth.',
    "I won.",
    "If you believe that there's a Hell, we're pretty much already going there.",
    "Well, technically, chemistry is the study of matter. But I prefer to see it as the study of change.",
    "You clearly don't know who you're talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!",
    "Right now, what I need, is for you to climb down out of my ass. Can you do that? Will you do that for me honey? Will you please, just once, get off my ass? You know? I'd appreciate it. I really would.",
    "Smoking marijuana, eating Cheetos, and masturbating do not constitute plans in my book.",
    "Fuck you and your eyebrows.",
    "If you don't know who I am, then maybe your best course would be to tread lightly.",
    "I did it for me. I liked it. I was good at it. And, I was really…I was alive.",
    "Jesse, you asked me if I was in the meth business, or the money business… Neither. I'm in the empire business.",
    "We tried to poison you. We tried to poison you because you're an insane, degenerate piece of filth, and you deserve to die.",
    "Stay out of my territory.",
    "Jesse, you asked me if I was in the meth business, or the money business… Neither. I'm in the empire business."
]

// Function to return random quote from any char quote array:
const getRandQuote = (array) => {
    let randNum = Math.floor(Math.random() * array.length);
    return array[randNum];
}

// Array containing all info on all chars, each in its own object:
const allChars = [
    { name: 'Badger', imageURL: './assets/badger.jpg', quote: getRandQuote(badgerQuotes) },
    { name: 'Gus Fring', imageURL: './assets/gus-fring.jpg', quote: getRandQuote(gusFringQuotes) },
    { name: 'Hank Schrader', imageURL: './assets/hank-schrader.jpg', quote: getRandQuote(hankSchraderQuotes) },
    { name: 'Jane Margolis', imageURL: './assets/jane-margolis.jpg', quote: getRandQuote(janeMargolisQuotes) },
    { name: 'Jesse Pinkman', imageURL: './assets/jesse-pinkman.jpg', quote: getRandQuote(jessePinkmanQuotes) },
    { name: 'Mike Ehrmantraut', imageURL: './assets/mike-ehrmantraut.jpg', quote: getRandQuote(mikeEhrmantrautQuotes) },
    { name: 'Saul Goodman', imageURL: './assets/saul-goodman.jpg', quote: getRandQuote(saulGoodmanQuotes) },
    { name: 'Skinny Pete', imageURL: './assets/skinny-pete.jpg', quote: getRandQuote(skinnyPeteQuotes) },
    { name: 'Skyler White', imageURL: './assets/skyler-white.jpg', quote: getRandQuote(skylerWhiteQuotes) },
    { name: 'Tuco Salamanca', imageURL: './assets/tuco-salamanca.jpg', quote: getRandQuote(tucoSalamancaQuotes) },
    { name: 'Walter White jr', imageURL: './assets/walter-white-jr.jpg', quote: getRandQuote(waltJrQuotes) },
    { name: 'Walter White', imageURL: './assets/walter-white.jpg', quote: getRandQuote(walterWhiteQuotes) },
]

// Randomize order of allChars so that different chars will be used in each round:
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle:
    while (currentIndex != 0) {
  
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
//shuffle(allChars);

// Function to display cards containing each char's image and name:
// Add data-name to each info card:
function displayCharsNameImage() {
    for (let i = 0; i < allChars.length - (allChars.length - 6); i++) {
    //for (let i = 1; i < 2; i++) {
        cardArea.innerHTML += "<div class='char-card info-card' data-name='" + allChars[i].name.toLowerCase().replace(/ /g, '-') + "'>"
        + "<div class='card-back'></div>"
        + "<div class='info-container hidden'>"
        + "<div class='img-container'>"
        + "<img src='" + allChars[i].imageURL + "'>"
        + "</div>"
        + "<p>" + allChars[i].name + "</p>"
        + "</div>"
        + "</div>"
    }
}
displayCharsNameImage();

// Function to display cards containing each char's quote:
// Add data-name to each quote card:
function displayCharsQuote() {
    for (let i = 0; i < allChars.length - (allChars.length - 6); i++) {
    //for (let i = 1; i < 2; i++) {
        cardArea.innerHTML += "<div class='char-card quote-card' data-name='" + allChars[i].name.toLowerCase().replace(/ /g, '-') + "'>"
        + "<div class='card-back'></div>"
        + "<p class='hidden'>" + allChars[i].quote + "</p>"
        + "</div>"
    }
}
displayCharsQuote();

// Get each char card's DOM element:
let charCards = document.getElementsByClassName('char-card');
// Make array out of charCards:
charCards = Array.from(charCards);

// Change cards' border color, depending on current bg:
const changeStylingBasedOnCurrentBG = () => {
    if (document.body.style.backgroundImage === 'url("./assets/bg-one.jpg")') {
        document.getElementById('in-game-header').style.backgroundColor = 'darkred';
        document.getElementById('in-game-header').style.color = 'white';
    } else {
        document.getElementById('in-game-header').style.backgroundColor = 'var(--bb-green)';        
    }
    for (let card of charCards) {
        document.body.style.backgroundImage === 'url("./assets/bg-one.jpg")' ? card.style.borderColor = 'darkred' : card.style.borderColor = 'var(--bb-green)'
    }
}
changeStylingBasedOnCurrentBG();

// Add function to randomize order in which the cards will display (DOM elements)
function shuffleCharCardsDisplayed() {
    shuffle(charCards).forEach(function(elem) {
        cardArea.appendChild(elem)
    })
}
//shuffleCharCardsDisplayed();

// Add EL to add each card to 'selectedCards' array
// The name, img, or quote, depending on the type of card, should no longer be hidden (remove hidden class from card)
// Push selected card to selectedCards array
let selectedCards = [];
let matchedCards = [];
for (let card of charCards) {
    card.addEventListener('click', function() {
        selectedCards.push(card);
        console.log(selectedCards);
        console.log(selectedCards.length);
        console.log(selectedCards[selectedCards.length - 1].dataset.name);
        card.firstChild.classList.add('hidden');
        card.children[1].classList.remove('hidden');
        card.style.background = "rgba(0, 0, 0, 0.6)";
        if (selectedCards.length === 2 && (selectedCards[0].dataset.name != selectedCards[1].dataset.name)) {
            // Disable clicking of all cards:
            for (let card of charCards) {
                if (!card.classList.contains('matched')) {
                    card.style.pointerEvents = 'none';
                }
            }

            // Display selection results box & add appropriate text:
            document.getElementById('selection-result').style.display = 'block';
            document.getElementById('selection-result').innerHTML += "<header>Nope!</header>" 
            
            // When resetting, clear selectedCards and restore styling to selection result box, selected cards:
            // only reset cards that have not been matched
            // BELOW COMMENTED-OUT CODE SHOULD BE USED IF USING A 'TRY AGAIN' BUTTON TO RESET CARDS AFTER A MISMATCH
            /* document.getElementById('try-again').addEventListener('click', function() {
                + "<button id='try-again'>Try again</button>" // goes in selection-result innerHTML if using 'try again' button
                for (let card of charCards) {
                    document.getElementById('selection-result').innerHTML = ""
                    document.getElementById('selection-result').style.display = 'none';
                    if (!matchedCards.includes(card)) {
                        card.firstChild.classList.remove('hidden');
                        card.children[1].classList.add('hidden');
                        card.style.pointerEvents = 'auto';
                        card.style.background = "black";
                    }
                }
                selectedCards = [];
            }) */
            // BELOW FUNC IS TO AUTOMATICALLY RESET CARDS AFTER A MISMATCH AFTER A CERTAIN PERIOD OF TIME
            setTimeout(function() {
                for (let card of charCards) {
                    document.getElementById('selection-result').innerHTML = ""
                    document.getElementById('selection-result').style.display = 'none';
                    if (!matchedCards.includes(card)) {
                        card.firstChild.classList.remove('hidden');
                        card.children[1].classList.add('hidden');
                        card.style.pointerEvents = 'auto';
                        card.style.background = "black";
                    }
                }
                selectedCards = [];
            }, 2000)
        } else if (selectedCards.length === 2 && (selectedCards[0].dataset.name === selectedCards[1].dataset.name)) {
            document.getElementById('selection-result').style.display = 'block';
            document.getElementById('selection-result').innerHTML += "<header>Match!</header>"

            // Make 'Match!' message disappear after a few seconds:
            setTimeout(function() {
                document.getElementById('selection-result').style.display = 'none';
                document.getElementById('selection-result').innerHTML = ""
            }, 1200);

            // Add 'matched' to each card's classlist & push to matched cards array:
            for (let card of selectedCards) {
                card.style.pointerEvents = 'none';
                card.classList.add('matched');
                matchedCards.push(card);
                console.log(matchedCards)
            }
            console.log(matchedCards.length)
            console.log(charCards.length)
            selectedCards = [];
            if (matchedCards.length === charCards.length) {
                document.getElementById('game-over').style.display = 'flex';
                document.getElementById('play-again-btn').addEventListener('click', function() {
                    window.location.reload();
                })
            }
        }
    })
}

// After the length of selectedCards is 2 & datanames are not equal, automatically del both from array & restore original styling after a few secs or add .hidden to each card's .info-container (if it isn't there already) once user clicks anywhere on the page
// Once selectedCards length is 2, make next click anywhere on page 'flip' the two selected cards (loop through charCards and if their info container or quote p is not hidden, add .hidden to these children's class list)



// If length of selectedCards is 2 & both cards' datanames are equal, display congratulatory message ('Match!') and disable both cards and make 'match!' message disappear automatically after a few seconds. pause timer while it displays.