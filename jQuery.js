$("#newQuote").on("click", function () {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=renderHTML&callback=?");
});

function renderHTML(json) {
    $("#quoteText").hide().html(json.quoteText).fadeIn();
    if (json.quoteAuthor === '') {
        json.quoteAuthor = "Unknown";
    }
    $("#quoteAuthor").html(" - " + json.quoteAuthor);
    var quote = $("#quoteText").text();
    var author = $("#quoteAuthor").text();
};

$("#tweet").on("click", function () {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent($("#quoteText").text() + $("#quoteAuthor").text()));
});
