 document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('.fade-in-section');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });
        sections.forEach(section => {
            observer.observe(section);
        });
        // Mobile menu toggle
        const menuToggleBtn = document.getElementById('menu-toggle-btn');
        const mainNav = document.getElementById('main-nav');
        if (menuToggleBtn && mainNav) {
            menuToggleBtn.addEventListener('click', () => {
                // This is a simplified toggle logic for demonstration.
                // A more robust implementation would handle display states better.
                if (mainNav.style.display === 'flex') {
                    mainNav.style.display = 'none';
                    menuToggleBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
                } else {
                    mainNav.style.display = 'flex';
                    mainNav.style.flexDirection = 'column';
                    mainNav.style.position = 'absolute';
                    mainNav.style.top = '100%';
                    mainNav.style.left = '0';
                    mainNav.style.right = '0';
                    mainNav.style.backgroundColor = 'var(--background-dark)';
                    mainNav.style.padding = '1rem 2rem';
                    mainNav.style.gap = '1rem';
                    menuToggleBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
                }
            });
        }
        // Close nav on link click
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                 if (window.innerWidth < 768) {
                    mainNav.style.display = 'none';
                    menuToggleBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
                 }
            });
        });
    });