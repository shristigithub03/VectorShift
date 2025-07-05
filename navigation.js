// navigation.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰';
    document.querySelector('nav').prepend(mobileMenuToggle);

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
        this.classList.toggle('active');
    });

    // Smooth scrolling for all navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's a button or external link
            if (this.classList.contains('btn') || this.getAttribute('href').startsWith('http')) {
                return;
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                document.querySelector('nav ul').classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Highlight active navigation item based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id') || '';
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            if (href === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Add click handler for all buttons with smooth scroll
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            
            if (target && target.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});