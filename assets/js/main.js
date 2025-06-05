// AOS Animation initialization
if (typeof AOS !== 'undefined') {
    AOS.init();
}

// Portfolio filter logic
document.addEventListener('DOMContentLoaded', function () {
    // Portfolio filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filter === '*' || item.getAttribute('data-category') === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Testimonials slider (simple auto-slide)
    let testimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    function showTestimonial(idx) {
        testimonials.forEach((t, i) => {
            t.style.display = i === idx ? 'block' : 'none';
        });
    }
    function nextTestimonial() {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        showTestimonial(testimonialIndex);
    }
    if (testimonials.length > 1) {
        showTestimonial(testimonialIndex);
        setInterval(nextTestimonial, 4000);
    }

    // Optional: Smooth scroll for nav links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar hide on scroll down, show on scroll up
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('scroll-down');
            navbar.classList.remove('scroll-up');
        } else {
            navbar.classList.add('scroll-up');
            navbar.classList.remove('scroll-down');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Contact Form (demo only)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});