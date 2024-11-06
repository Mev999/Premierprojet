let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalImages = document.querySelectorAll('.carousel-image').length;
    currentIndex = (index + totalImages) % totalImages;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Automatic slide every 3 seconds
setInterval(nextSlide, 3000);