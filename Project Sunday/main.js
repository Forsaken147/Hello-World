const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');
const opacity = 0.5;

images[0].style.opacity = opacity;

images.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {
  // Reset the opacity for images
  images.forEach(img => (img.style.opacity = 1));

  // Change current image to the source of the clicked image
  current.src = e.target.src;

  // Add fading class
  current.classList.add('fade-in');
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change te opacity to the variable when clicked
  e.target.style.opacity = opacity;
}