var quoteText = document.getElementById('quoteText');
var newQuote = document.getElementById('newQuote');
var quoteAuthor = document.getElementById('quoteAuthor');
var twitter = '';

function getJSONP() {
    //Create a SCRIPT element.
    var script = document.createElement('script');

    //Set the Type.
    script.type = 'text/javascript';

    //Set the source to the URL the JSON Service.
    script.src = 'http://quotes.stormconsultancy.co.uk/quotes.json?callback=renderHTML'

    //Append the script element to the HEAD section.
    document.getElementsByTagName('head')[0].appendChild(script);
}

newQuote.addEventListener('click', function() {
    getJSONP();
});


// Display data from JSON.

function renderHTML(data) { 
    var randomQuote = data[(Math.floor(Math.random() * data.length))];
    
    quoteText.textContent = '"' + randomQuote.quote + '"';
    
    quoteAuthor.textContent = randomQuote.author;
    
    twitter = '"' + randomQuote.quote + '"' + ' ' + randomQuote.author;
    
    fadeIn(quoteText);
    fadeIn(quoteAuthor);
}

// Share on Twitter.

document.getElementById('tweet').addEventListener('click', function() {
    document.getElementById('tweet').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(twitter);
});


function fadeIn(el) {
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 200;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }

    };

    tick();
}


