document.getElementById('loadQuote').addEventListener("click", printQuote, quoteTimer(10000), false);

function quoteTimer(quoteTime) {
    return window.setInterval(printQuote, quoteTime);
}

function getColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}


var quotesUsed = [];

function getCurrentQuote() {
    do {
        for (var i = 0; i < quotes.length; i++) { 
            var getRandomNumber = Math.floor(Math.random() * quotes.length); 
            if (quotesUsed.indexOf(getRandomNumber) === -1) { 
                quotesUsed.push(getRandomNumber); 
                return quotes[getRandomNumber]; 
            }
        }
        quotesUsed = []; 
    } while (quotesUsed.length < quotes.length);
}

function printQuote() {
    var CurrentQuote = getCurrentQuote();
    var newColor = getColor();
    var printHTML = '<p class="quote">' + CurrentQuote.quote + '</p>';
    printHTML += '<p class="source">' + CurrentQuote.source;
    if (CurrentQuote.citation === " " || !CurrentQuote.hasOwnProperty("citation")) {
        printHTML += '<span class="citation">Source Unknown</span>';
    } else {
        printHTML += '<span class="citation">' + CurrentQuote.citation + '</span>';
    }
    if (CurrentQuote.year === " " || !CurrentQuote.hasOwnProperty("year")) {
        printHTML += '<span class="citation">Year Unknown</span></p>';
    } else {
        printHTML += '<span class="year">' + CurrentQuote.year + '</span></p>';
    }

    document.getElementById("quote-box").innerHTML = printHTML;

    document.body.style.background = newColor;

}

// Tanise Williams / 2016
