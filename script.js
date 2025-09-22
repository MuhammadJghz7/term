document.addEventListener('DOMContentLoaded', () => {
    // 1. GSAP Animation for hero text
    gsap.to('.line', {
        y: 0,
        duration: 1.5,
        stagger: 0.25,
        ease: 'power4.out',
        delay: 0.5
    });

    // 2. Click feedback for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Optional: Add a subtle animation on click
            gsap.to(e.target, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true, // goes back to original state
                repeat: 1
            });
            console.log(`Navigating to ${e.target.href}`);
        });
    });

    // 3. Click feedback for project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Optional: Add a subtle animation on click
             gsap.to(card, {
                scale: 0.98,
                duration: 0.15,
                yoyo: true,
                repeat: 1
            });
            console.log("Project card clicked!");
            // You can replace this with opening a project link, e.g.,
            // window.location.href = 'your-project-link.html';
        });
    });
});
