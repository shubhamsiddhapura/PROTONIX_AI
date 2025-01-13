// // Optional JavaScript for interactive features (e.g., dropdowns)
// document.addEventListener("DOMContentLoaded", () => {
//     // For example, dropdown behavior
//     const dropdown = document.querySelector(".navbar-dropdown");
//     if (dropdown) {
//       dropdown.addEventListener("mouseenter", () => {
//         // Code for showing dropdown options
//       });
  
//       dropdown.addEventListener("mouseleave", () => {
//         // Code for hiding dropdown options
//       });
//     }
//   });
  






// Optional JavaScript for interactive features (e.g., dropdowns)
document.addEventListener("DOMContentLoaded", () => {
  // For example, dropdown behavior
  const dropdown = document.querySelector(".navbar-dropdown");
  if (dropdown) {
    dropdown.addEventListener("mouseenter", () => {
      // Code for showing dropdown options
    });

    dropdown.addEventListener("mouseleave", () => {
      // Code for hiding dropdown options
    });
  }
});

function toggleMenu() {
  const navbarOptions = document.querySelector('.navbar-options-container');
  navbarOptions.classList.toggle('active');
}


