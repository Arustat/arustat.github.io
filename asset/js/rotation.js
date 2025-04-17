const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.certification-card');

// Duplique les cartes pour la boucle infinie
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});
