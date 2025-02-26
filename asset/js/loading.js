window.onload = function() {
    // Sélectionner l'élément .clap_transition
    var transition = document.querySelector('.clap_transition');

    // Vérifier que l'élément existe
    if (transition) {
        setTimeout(function() {
            // Afficher le fond noir
            transition.classList.add('show');

            // Redirection après un délai pour que la transition soit visible
            setTimeout(function() {
                redirect('home.html');
            }, 1000); // 1 seconde pour laisser le temps à la transition

        }, 1000); // 2 secondes avant d'afficher le fond noir
    } else {
        console.error("L'élément .clap_transition n'a pas été trouvé");
    }
};

function redirect(url) {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;

    iframe.onload = function() {
        window.location.href = url;
    };

    document.body.appendChild(iframe);
}
