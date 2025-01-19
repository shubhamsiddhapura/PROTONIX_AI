window.onload = function () {
    // Show the video first
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0'; // Fade out the video
        setTimeout(() => {
            preloader.style.display = 'none'; // Hide video after fade-out

            // Show the logo
            const logoContainer = document.getElementById('logo-container');
            logoContainer.style.display = 'flex'; // Make the logo container visible
            setTimeout(() => {
                logoContainer.style.opacity = '1'; // Fade in the logo

                // Wait for 2 seconds, then show the main content
                setTimeout(() => {
                    logoContainer.style.opacity = '0'; // Fade out the logo
                    setTimeout(() => {
                        logoContainer.style.display = 'none';

                        // Show the main content
                        const mainContent = document.getElementById('main-content');
                        mainContent.style.display = 'block';
                        mainContent.style.opacity = '1'; // Fade in the main content
                    }, 500); // Matches fade-out duration
                }, 2000); // Logo display duration
            }, 100); // Ensure logo fades in smoothly
        }, 500); // Matches video fade-out duration
    }, 2000); // Video display duration
};
