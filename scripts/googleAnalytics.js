// Google Analytics host

var gaJsHost =
    "https:" == document.location.protocol ? "https://ssl." : "http://www.";
document.write(
    unescape(
        "%3Cscript src='" +
            gaJsHost +
            "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"
    )
);

// Google Analytics tracker

try {
    var pageTracker = _gat._getTracker("UA-8530772-3");
    pageTracker._trackPageview();
} catch (err) {
    console.log(err);
}