/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
Array of quotes
***/

var quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing",
    source: "Walt Disney",
    year: 1943, //probably not accurate.  Could not find year or citation for most of these quotes added for expectations and to show that the code works
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa",
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    source: "Tony Robbins",
  },
  {
    quote: "Humility is the solid foundation of all the virtues.",
    source: "Confucius",
    citation: "confuciussays.com", //see Walt Disney's quote note.
  },
]

console.log(quotes);


/***
function to get a random number from
0 - one number under the length of
the quotes array and returns a random
object within the array
***/

function getRandomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

console.log(getRandomQuote());

/***
printQuote() function that
creates the content in the HTML
once it's called.  Added if statements
in case more quotes are added with citation
or year included
***/

function printQuote() {
  var result = getRandomQuote();
  var cont = '';
  cont += "<p class='quote'>" + result.quote + "</p>";
  cont += "<p class='source'>" + result.source;
  if (result.citation) {
    cont += "<span class='citation'>" + result.citation + "</span>";
  }
  if (result.year) {
    cont += "<span class='year'>" + result.year + "</span>"
  }
  cont += "</p>"
  document.getElementById('quote-box').innerHTML = cont;
}

/***Calling function once before button
is pressed so we don't load an empty page ***/
printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.