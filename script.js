document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animation for hero text
    gsap.to('.line', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.9, // Adds a delay between each line's animation
        ease: 'power4.out'
    });
});
