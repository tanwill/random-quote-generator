//this event listener attaches the button to the changing of the quote, it also starts the timer.
document.getElementById('loadQuote').addEventListener("click", printQuote, quoteTimer(10000), false);

//timer changes dom after 10 seconds whether or not button is clicked
function quoteTimer(quoteTime) {
    return window.setInterval(printQuote, quoteTime);
}

//this function cycles through random numbers to change the hex code of the background
function getColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

//empty variable for storing used quotes
var quotesUsed = [];

//this function generates a random quote. if the quote has not yet been used (quotesUsed) it is returned, that way a quote isn't chosen twice in a row
function getCurrentQuote() {
    do {
        //looping through the quotes
        for (var i = 0; i < quotes.length; i++) { 
            //find a random number no larger than the length of the quotes' array
            var getRandomNumber = Math.floor(Math.random() * quotes.length); 
            //if the number is not indexed in the quotesUsed variable, push it so that it is. then return.
            if (quotesUsed.indexOf(getRandomNumber) === -1) { 
                quotesUsed.push(getRandomNumber); 
                return quotes[getRandomNumber]; 
            }
        }
        quotesUsed = [];

        //only run this function for as long as the quotes array 
    } while (quotesUsed.length < quotes.length);
}

//this function renders the quote on the DOM
function printQuote() {
    //this variable contains the returned quote from the getCurrentQuote function
    var CurrentQuote = getCurrentQuote();
    //this variable contains the returned hex code from the getColor function
    var newColor = getColor();
    //this variable assigns the current quote to the class "quote" in the html
    var printHTML = '<p class="quote">' + CurrentQuote.quote + '</p>';
    //this adds the source to the html
    printHTML += '<p class="source">' + CurrentQuote.source;
    //this conditional checks if there is a citation. If so it adds it to the DOM in the same fashion as the quote and source were added. If not it prints "source unknown"
    if (CurrentQuote.citation === " " || !CurrentQuote.hasOwnProperty("citation")) {
        printHTML += '<span class="citation">Source Unknown</span>';
    } else {
        printHTML += '<span class="citation">' + CurrentQuote.citation + '</span>';
    }
    //this conditional does the same as the last, but with the year property
    if (CurrentQuote.year === " " || !CurrentQuote.hasOwnProperty("year")) {
        printHTML += '<span class="citation">Year Unknown</span></p>';
    } else {
        printHTML += '<span class="year">' + CurrentQuote.year + '</span></p>';
    }

    //binding the printHTML variable to the ID "quote-box"
    document.getElementById("quote-box").innerHTML = printHTML;
    //changing the background color
    document.body.style.background = newColor;

}

// Tanise Williams / 2016
