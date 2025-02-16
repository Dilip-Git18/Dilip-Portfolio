// Smooth Scroll Effect for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle the nav menu when hamburger is clicked
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

document.addEventListener('scroll', function() {
    const video = document.getElementById('home-video');
    if (window.scrollY > 200) {
        video.pause();
    } else {
        video.play();
    }
});
