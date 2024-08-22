document.addEventListener('DOMContentLoaded', (event) => {
    const stars = document.querySelector('#stars');
    const button = document.querySelector('#button');

    button.addEventListener('mouseover', function() {
        stars.style.display = "block";
    });

    button.addEventListener('click', function() {
        setTimeout(function() {
            RedirectionJavascript();
        }, 1);
    });

    function RedirectionJavascript() {
        document.location.href = "asset/pages/loding.html";
    }
});
