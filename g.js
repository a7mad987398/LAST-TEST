document.querySelector('.back-button').addEventListener('click', function() {
    window.history.back();
});

document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');
    slideshows.forEach(slideshow => {
        startSlideshow(slideshow);
    });
});

function startSlideshow(slideshow) {
    let currentIndex = 0;
    const images = slideshow.querySelectorAll('img');

    if (images.length > 0) {
        images[currentIndex].classList.add('active');
        
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000);
    }
}
