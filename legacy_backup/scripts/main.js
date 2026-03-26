document.addEventListener('DOMContentLoaded', () => {

    // --- Loader ---
    // Simulate loading time for "meat cooking" animation (3.5s)
    const loader = document.querySelector('.loader');
    const body = document.body;

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            body.classList.remove('loading');
            body.classList.add('loaded');
        }, 500);
    }, 3500); // 3.5s loading time for the animation setup


    // --- Modal Logic ---
    window.openBookingModal = function () {
        const modal = document.getElementById('bookingModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    window.closeBookingModal = function () {
        const modal = document.getElementById('bookingModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeBookingModal();
        }
    });


    // --- Navigation Scroll Effect ---
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });


    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.nav__toggle');
    const menuClose = document.querySelector('.mobile-menu__close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        // Toggle body scroll
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });


    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal-text, .reveal-card');

    const revealObserverOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    // --- Parallax Effect for Hero ---
    const heroImage = document.querySelector('.hero__image');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        // Only apply if within hero section range to save performance
        if (scrollPosition < window.innerHeight) {
            const speed = 0.5;
            heroImage.style.transform = `translateY(${scrollPosition * speed}px)`;
        }
    });


    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});
