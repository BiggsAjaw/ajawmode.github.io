// Fade-in on Page Load
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

// Active Navigation Highlight (robust version)
const setActiveNavLink = () => {
    // Get the current path and remove trailing slashes
    const currentPath = window.location.pathname.replace(/\/$/, "");

    // Select all navigation links
    const navLinks = document.querySelectorAll('.main-header nav ul li a');

    // Loop through each navigation link and compare paths
    navLinks.forEach(link => {
        // Get the link's `href` and remove trailing slashes
        const linkPath = link.getAttribute('href').replace(/\/$/, "");

        if (currentPath === linkPath) {
            link.classList.add('active-nav'); // Add active class if paths match
        } else {
            link.classList.remove('active-nav'); // Remove active class otherwise
        }
    });
};

// Set active navigation on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);
