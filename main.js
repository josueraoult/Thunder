const menuImg = document.querySelector(".menu");
const closeImg = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");

menuImg.addEventListener("click", () => {
  navLinks.style.display = "block";
  menuImg.style.display = "none";
  closeImg.style.display = "block";
});

closeImg.addEventListener("click", () => {
  navLinks.style.display = "none";
  menuImg.style.display = "block";
  closeImg.style.display = "none";
});
const submitBtn = document.querySelector('.sign-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  // Affichage de la page "load.html"
  const loadPage = window.open('load.html', '_blank');

  // Redirection vers la page "sex.html" après 2 secondes
  setTimeout(() => {
    loadPage.close(); // Fermeture de la page "load.html"
    window.location.href = 'join.html'; // Redirection vers "sex.html"
  }, 2000); // Durée de l'effet de chargement (en millisecondes)
});
