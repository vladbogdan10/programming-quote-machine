var quoteText = document.getElementById("quoteText");
var newQuote = document.getElementById("newQuote");
var quoteAuthor = document.getElementById("quoteAuthor");
var twitter = "";


newQuote.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://quotes.stormconsultancy.co.uk/quotes.json");
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var jData = JSON.parse(xhr.responseText);
            renderHTML(jData);
        } else {
            alert("We connected to the server, but it returned an error.");
        }
    };
    
    xhr.onerror = function() {
        alert("Connection error! Please try again.")
    }
    
    xhr.send();
});

// FadeIn. 

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
};

// Display data from JSON.

function renderHTML(data) { 
    var randomQuote = data[(Math.floor(Math.random() * data.length))];
    
    quoteText.textContent = "\"" + randomQuote.quote + "\"";
    
    quoteAuthor.textContent = randomQuote.author;
    
    twitter = "\"" + randomQuote.quote + "\"" + " " + randomQuote.author;
    
    fadeIn(quoteText);
};

// Share on Twitter.

document.getElementById("tweet").addEventListener("click", function() {
    document.getElementById("tweet").href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(twitter);
});