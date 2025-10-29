// Loading handler
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loading').style.display = 'none';
        document.body.style.overflow = 'visible';
    }, 1000);
});

// Intersection Observer for steps animation
const stepObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    },
    { threshold: 0.2 }
);

// Observe all steps
document.querySelectorAll('.step').forEach(step => {
    stepObserver.observe(step);
});

// Single smooth scroll handler
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Single parallax effect handler
const parallaxHandler = () => {
    if (window.innerWidth <= 768) return;
    
    requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax-element').forEach((element) => {
            const speed = 0.1;
            const offset = -(scrolled * speed);
            element.style.transform = `translateY(${offset}px)`;
        });
    });
};

window.addEventListener('scroll', parallaxHandler, { passive: true });