﻿# bb-quote-match
This is a matching game I built with HTML, CSS, & vanilla JavaScript, in which the user attempts to match quotes from Breaking Bad with the characters who said them. There are 2 modes in which the user can play; one contains 8 matches (easy mode) & the other 16 (hard mode). In 'easy' mode, 8 random characters are selected from a total of 16, & all 16, of course, display in 'hard' mode. In either case, the cards are randomly displayed on the page. Total matches that the user makes throughout the game are tracked, as well as time that elapsed since the start of the game. Users can only select 2 cards in a single turn, after which the cards are either reset, or 'flipped back over', or they remain flipped, depending on if they match or not. At the end of the game, the user sees a funny, randomly selected Breaking Bad GIF, as well as a nice message, & is given the option to play again.
  
In summary, this required the ability to use HTML, CSS features such as grid & flexbox, create JS objects & arrays & access the information inside them using loops, as well as work with various types of functions, & manipulate DOM elements & CSS styling properties with JS.  
  
Please read below for more details:

* Upon loading the page, the user is greeted with a short instruction to click or tap one of two buttons. The first button gives the user the option to play the game in 'easy' mode, in which 8 matches (16 total cards) display. The second button gives the user the chance to play in 'hard' mode, in which 16 matches (32 total cards) are displayed. The box in which the greeting & instruction appear is animated. Also, one of two images randomly displays as the page background & the styling of a few things in the game depends on which background is set.

* Upon clicking of one of the two aforementioned buttons, the game begins. A header, which contains the game title, as well as the total matches the user has found out of the total matches the game contains (either 8 or 16), & a timer that tracks how much time has passed since the user began the game.
  * The match tally is displayed programmatically through JS. A variable, initialized at 0, tracks the number of matches the user has gotten (one is incremented each time a match occurs & the updated total displays in the in-game header), & displays in the text content of the appropriate part of the in-game header as a fraction of the total number of cards displayed (again, depending on what mode the user selected at the beginning) divided by two.
  * To track the time, I initialized a variable that serves as a unit of time. In a setTimeout() function, I increment this unit every second. I then assign a variable corresponding to minutes passed, which is equal to the time unit divided by 60, rounded to the lowest whole minute. Then, I assign a variable for seconds, which is equal to the time-unit variable minus the product of the minutes variable times 60. Then, to display the minutes & seconds variables in the form of a timer, I assign make the text content of the timer equal to one of two things: if the unit of time variable is under 10, the minutes variable is added, then a colon in the form of a string, then by 0 in the form of a string, then by the number the seconds variable is equal to. If the seconds variable is equal to or more than 10, everything previously mentioned is added to the text content, except the 0 in string form.
* To display the cards, I used a couple of functions, each pertaining to the type of card to be displayed. In a pair, one card displays the character's image & name & the other contains the character's quote.
  * I stored information for each character (name, image, quote) in a unique object inside an array, named 'allChars'. With every game, this array is shuffled so that all characters will randomly be placed in the game mode containing 8 matches, instead of the same 8 that come first in the allChars array.
  * Character quotes are stored in a unique array that corresponds to a given character.
  * In order to give the user the option to play with either 8 or 16 matches, I used the variable cardsToDisplay. If the user clicks the 'easy' button, this variable equals 8. Else (the only other option is to click the 'hard' button), this variable equals 16. This will later be used in the functions to display the correct HTML objects based on which mode the user decides to play in.
  * In the function to display the character-information cards, I loop through the allChars array, creating a new card with the appropriate number of cards that should be displayed, depending on which mode the user selected to play in. The number of times the function loops through the allChars array is calculated by the length of allChars, minus the difference of the cardsToDisplay variable subtracted from the length of the allChars array. Doing it this way makes it scalable in that you won't need to worry about updating these functions' loops in case you decide to add more characters. 
  * In the function to display the character-information cards, I access the 'name' & 'image' properties to display inside each card.
  * In the function to display the quote cards, I simply add the value contained in the 'quote' key from the character's object in the allChars array, to the HTML of the card. Since I have several quotes contained in each character's quote array, I created the function 'getRandQuote()', which returns a random quote from a given quote array. The value of the 'quote' key in each character's object in the allChars array is set to the value which getRandQuote() returns. For example: quote: getRandQuote(walterWhiteQuotes).
  * Each of the above functions also adds a dataset to each card, which is derived from the 'name' property in the character's object in the allChars array. This dataset is what will later be used to determine if the two cards the user selects in each turn are a match or not.
  * Once all cards have been displayed, the are randomly shuffled so that they display in (most likely, at least) a different order in each game. Remember that when playing in 'easy' mode, only 8 characters & their quotes display, but since I randomly shuffled the allChars array, then shuffled the order in which the cards display, the game becomes much more challenging, & even more so when playing in 'hard' mode.
  * By default, the back of the card displays, which is the Breaking Bad logo. The character information or quote is hidden until the user clicks/taps a card.
  * When the user selects a card, clicking on it is disabled, & the card's DOM element is pushed to the selectedCards array & a flipping animation is added. Once this animation runs its course, it is removed so that it can be added again in case of a mismatch. The information contained on the card (either character info or their quote) displays, & the 'back' of the card is hidden. This hiding/unhiding of the card's info & its 'back' is accomplished by adding/removing the 'hidden' CSS class to the 2 parts.
  * Once the length of the selectedCards array equals 2, clicking on all cards is disabled until the 2 are flipped back over in case of a mismatch. If they are a match, clicking is only disabled on these 2 cards & these two cards are added to the matchedCards array.
  * If the length of the selectedCards array equals 2 & the dataset containing the character name corresponding to each selected card are not equal, a 'Nope!' message briefly displays, then automatically disappears in short order, due to a setTimeout() function. The flip animations are added again, then removed, the card's info is hidden again, & the 'back' of the card displays again, again, by 'passing around' the 'hidden' CSS class. Finally, the selectedCards array is reset to contain nothing, enabling the 2 cards of the next turn to be pushed here.
  * If there is a match (if the selectedCards array equals 2 & the datasets containing each card's character name are equal), the totalMatches tally is increased by 1 & the total number of matches in the in-game header is updated. If the match is not the final match of the game, a 'Match!' message displays briefly, unless the matched character is Walter White, in which case an alternative image displays briefly instead of the message. The selectedCards array is then reset so the next turn can be played. If the match is the final match of the game (length of charCards (total cards displayed) equals the length of matchedCards array), the timer stops, & a box containing a funny GIF displays (GIF is randomly selected from an array), along with a congratulatory message & a button prompting the user to click it if they want to play again. Upon clicking this button, the page reloads & the user is once again given the option to play in 'easy' or 'hard' mode.
  
## None of the images used belong to me, nor do the names & images of the characters. I built this project with the sole intention of practicing my coding skills, have some fun doing so, & to maybe create some fun for anyone who wants to play this here game.
