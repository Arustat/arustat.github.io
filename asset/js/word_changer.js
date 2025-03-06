document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM entièrement chargé');
    // Tableau des salutations à afficher
    const greetings = [
        "Bonjour !",    // Français
        "Hello !",      // Anglais
        "Hola !",       // Espagnol
        "Ciao !",       // Italien
        "Hallo !",      // Allemand
        "Olá !",        // Portugais
        "こんにちは !", // Japonais
        "你好 !",       // Chinois
        "안녕하세요 !"    // Coréen
    ];
  
    let currentIndex = 0;
    const wordChangerEl = document.getElementById('word_changer');
  
    // Fonction principale qui lance l'animation de sortie
    function animateWordChanger() {
      console.log('Lancement de l’animation');
      wordChangerEl.classList.add('slideUpOut');
      wordChangerEl.addEventListener('animationend', handleSlideUpOut);
    }
  
    // Gère la fin de l'animation de sortie
    function handleSlideUpOut(event) {
      if (event.animationName === 'slideUpOut') {
        wordChangerEl.removeEventListener('animationend', handleSlideUpOut);
        // Passe à la salutation suivante
        currentIndex = (currentIndex + 1) % greetings.length;
        // Met à jour le texte
        wordChangerEl.textContent = greetings[currentIndex];
        // Réinitialise l'animation de sortie
        wordChangerEl.classList.remove('slideUpOut');
        // Lance l'animation d'entrée
        wordChangerEl.classList.add('slideUpIn');
        wordChangerEl.addEventListener('animationend', handleSlideUpIn);
      }
    }
  
    // Gère la fin de l'animation d'entrée
    function handleSlideUpIn(event) {
      if (event.animationName === 'slideUpIn') {
        wordChangerEl.removeEventListener('animationend', handleSlideUpIn);
        // Nettoyage : retire la classe d'animation d'entrée
        wordChangerEl.classList.remove('slideUpIn');
      }
    }
  
    // Lancement automatique du changement toutes les 3 secondes
    setInterval(animateWordChanger, 2000);
  });
  