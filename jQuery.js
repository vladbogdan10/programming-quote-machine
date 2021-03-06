$("#newQuote").on("click", function () {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=renderHTML&callback=?");
});

function renderHTML(json) {
    $("#quoteText").hide().html(json.quoteText).fadeIn();
    if (json.quoteAuthor === '') {
        json.quoteAuthor = "Unknown";
    }
    $("#quoteAuthor").hide().html(" - " + json.quoteAuthor).fadeIn();
    var quote = $("#quoteText").text();
    var author = $("#quoteAuthor").text();
};

$("#twitter-btn").on("click", function () {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent($("#quoteText").text() + $("#quoteAuthor").text()));
});
