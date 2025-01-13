document.addEventListener("DOMContentLoaded", function() {
    const fullScreenSection = document.querySelector('.aboutUs-full-screen-section');
    const infoSection = document.querySelector('.our-info');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fullScreenObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fullScreenSection.classList.add('animate-in');
            }
        });
    }, observerOptions);

    const infoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                infoSection.classList.add('animate-in');
            }
        });
    }, observerOptions);

    fullScreenObserver.observe(fullScreenSection);
    infoObserver.observe(infoSection);
});
