function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement de la page:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadPage('home.html'); // Charger la page d'accueil par défaut
});
