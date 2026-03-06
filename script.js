// script.js

// Image gallery lightbox functionality
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const images = document.querySelectorAll('.gallery img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
