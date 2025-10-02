document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navUl = document.querySelector('header nav ul');
    const navLinks = document.querySelectorAll('header nav ul li a');

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // Smooth scroll for navigation links and close mobile menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }

            // Close mobile menu after clicking a link
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navUl.contains(e.target) && !mobileMenuToggle.contains(e.target) && navUl.classList.contains('active')) {
            navUl.classList.remove('active');
        }
    });

    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (name && email && message) {
                // Simulate form submission
                console.log('Form Submitted:', { name, email, message });
                alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все поля формы.');
            }
        });
    }
});
