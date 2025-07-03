document.addEventListener('DOMContentLoaded', function () {
    // Responsive Navigation Menu
    const nav = document.querySelector('nav');
    let rightNav = document.querySelector('.right');
    // Add hamburger if not present
    if (!document.getElementById('hamburger-menu')) {
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.id = 'hamburger-menu';
        hamburger.setAttribute('aria-label', 'Open navigation');
        hamburger.setAttribute('tabindex', '0');
        hamburger.innerHTML = '<i class="fa fa-bars"></i>';
        nav.insertBefore(hamburger, rightNav);
    }
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.right');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    // Toggle menu on Enter/Space key for accessibility
    hamburger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        }
    });

    // Close menu when a link is clicked and scroll to section (with delay for mobile)
    // Close menu when a link is clicked and scroll to section (scroll first, then close menu)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash && document.querySelector(this.hash)) {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    navLinks.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }, 500); // 400ms delay to allow scroll to start
            } else {
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Responsive adjustment on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Typed.js Animation
    if (typeof Typed !== "undefined") {
        new Typed('#element', {
            strings: ['B.Tech in', 'Computer', 'Science', 'Specialization', 'in', 'Data Science'],
            typeSpeed: 40,
        });
    }
});

// Contact form validation and feedback
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    // Simple email validation
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate sending (replace with real backend integration)
      this.reset();
      alert('Thank you for contacting me! I will get back to you soon.');
});

// Lazy loading polyfill for older browsers
if ('loading' in HTMLImageElement.prototype === false) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.src = img.dataset.src || img.src;
    });
}
