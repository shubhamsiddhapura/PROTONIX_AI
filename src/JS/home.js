// Data Arrays
const servicesData = [
  { title: 'Web Development', description: 'From design to deployment, we craft websites that deliver seamless user experiences and drive growth.', image: './src/Assets/web.jpg' },
  { title: 'Mobile Application', description: 'Design and develop mobile apps that offer intuitive user experiences and meet your business objectives on both iOS and Android.', image: './src/Assets/and111.jpg' },
  { title: 'Artificial Intelligence & Machine Learning', description: 'Leverage AI to automate processes, gain insights, and drive smarter decision-making with our advanced machine learning solutions.', image: './src/Assets/AI.jpg' },
  { title: 'Graphic Designing', description: 'Transform your ideas into compelling visuals with customized graphic design services that reflect your unique identity.', image: './src/Assets/graphic.jpg' },
  { title: 'UI / UX', description: 'Deliver seamless, engaging, and user-friendly designs that enhance customer interactions and satisfaction.', image: './src/Assets/UIUX.jpg' },
  { title: 'QA & testing', description: 'Ensure the quality and performance of your software with our rigorous testing and quality assurance processes.', image: './src/Assets/QA11.jpg' },
  { title: 'Support & Maintenance', description: 'We keep your systems running smoothly with our round-the-clock support and proactive maintenance services.', image: './src/Assets/vapt1.jpg' },
  { title: 'VAPT testing', description: 'Our VAPT services offer comprehensive analysis to detect weaknesses and provide actionable insights to enhance security.', image: './src/Assets/Support.jpg' },
  { title: 'Digital Marketing', description: 'We provide data-driven digital marketing to ensure measurable growth for businesses.', image: './src/Assets/digital1.jpg' }
];

const featuresData = [
  { title: 'Innovative Strategies', description: 'Developing cutting-edge solutions to keep you ahead of trends.', icon: '💡' },
  { title: 'Quality Service', description: 'We ensure the highest quality in all our services.', icon: '🏆' },
  { title: 'Expert Team', description: 'Our team is composed of industry experts.', icon: '👥' },
  { title: 'Custom Solutions', description: 'We tailor solutions to meet your unique needs.', icon: ' 🏆 ' }
];

const steps = [
{ step: "1", title: "Planning", description: "Strategic planning to align solutions with your unique business goals and needs.", image: './src/Assets/plan.gif' },
{ step: "2", title: "Analysis", description: "In-depth analysis to uncover insights and guide informed decision-making.", image: './src/Assets/analysis.gif' },
{ step: "3", title: "Designing", description: "Creative design focused on functionality, user experience, and innovation.", image: './src/Assets/design.gif' },
{ step: "4", title: "Implementation", description: "Seamless implementation to bring solutions from concept to reality.", image: './src/Assets/implement.gif' },
{ step: "5", title: "Testing & Integration", description: "Rigorous testing and integration to ensure flawless performance and cohesion.", image: './src/Assets/testing.gif' },
{ step: "6", title: "Maintenance", description: "Ongoing maintenance to ensure reliability, security, and peak performance.", image: './src/Assets/maintain.gif' },
];

// Function to render steps for small screens in a stacked format
function renderStackedSteps() {
  const processContainer = document.getElementById('process-section');
  processContainer.innerHTML = ''; // Clear existing content

  // Create a card for each step
  steps.forEach(step => {
    const stepBox = document.createElement('div');
    stepBox.className = 'step-box'; // Use the same styling class

    stepBox.innerHTML = `
      <div class="icon">
        <img src="${step.image}" alt="${step.title} icon">
      </div>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    `;

    // Add the step box to the process section
    processContainer.appendChild(stepBox);
  });
}

// Function to render steps for larger screens (original functionality)
function renderSteps() {
  const leftColumn = document.getElementById('steps-left-column');
  const rightColumn = document.getElementById('steps-right-column');

  // Clear existing content
  leftColumn.innerHTML = '';
  rightColumn.innerHTML = '';

  // Render the first three steps in the left column
  // steps.slice(0, 3).forEach(step => {
    [steps[5], steps[4], steps[3]].forEach(step => {
    const stepBox = document.createElement('div');
    stepBox.classList.add('step-box');

    stepBox.innerHTML = `
      <div class="icon">
        <img src="${step.image}" alt="${step.title} icon">
      </div>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    `;

    leftColumn.appendChild(stepBox);
  });

  // Render the next three steps in the right column
  // steps.slice(3, 6).forEach(step => {
    [steps[0], steps[1], steps[2]].forEach(step => {

    const stepBox = document.createElement('div');
    stepBox.classList.add('step-box');

    stepBox.innerHTML = `
      <div class="icon">
        <img src="${step.image}" alt="${step.title} icon">
      </div>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    `;

    rightColumn.appendChild(stepBox);
  });
}

// Initial render based on the screen size
if (window.matchMedia("(max-width: 768px)").matches) {
  renderStackedSteps(); // Use stacked layout for mobile
} else {
  renderSteps(); // Original rendering for larger screens
}

// Handle window resize to re-render correctly
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    renderStackedSteps(); // Render the stacked steps for mobile
  } else {
    renderSteps(); // Call the existing render logic for larger screens
  }
});

// Call the function to render steps on page load
// document.addEventListener('DOMContentLoaded', resizestep);

// Insert Services
// Insert Services
const serviceCardsContainer = document.getElementById("service-cards");
let currentIndex = 0;

function getCardsPerView() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    return 1; // Show 1 card for small screens
  } else {
    return 3; // Show 3 cards for larger screens
  }
}

function renderServiceCards() {
  const cardsPerView = getCardsPerView();
  serviceCardsContainer.innerHTML = "";
  const visibleServices = servicesData.slice(currentIndex, currentIndex + cardsPerView);
  
  visibleServices.forEach((service, index) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}" class="service-image">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
    serviceCardsContainer.appendChild(card);

    // Apply the slide-up animation with a delay for each card
    setTimeout(() => {
      card.classList.add("animate-slide-up");
    }, index * 100); // 100ms delay for each card
  });

  // Update arrow visibility
  document.querySelector(".left-arrow").style.display = currentIndex === 0 ? "none" : "block";
  document.querySelector(".right-arrow").style.display = currentIndex >= servicesData.length - cardsPerView ? "none" : "block";
}

function nextCards() {
  const cardsPerView = getCardsPerView();
  if (currentIndex < servicesData.length - cardsPerView) {
    currentIndex += cardsPerView; // Use dynamic value
    renderServiceCards();
  }
}

function prevCards() {
  const cardsPerView = getCardsPerView();
  if (currentIndex > 0) {
    currentIndex -= cardsPerView; // Use dynamic value
    renderServiceCards();
  }
}

// Initial render
renderServiceCards();

function applyAnimation() {
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`; // Delay each card slightly
    card.classList.add("animate-slide-up"); // Add the animation class when in view
  });
}

// Function to remove the animation class when out of view
function resetAnimation() {
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.classList.remove("animate-slide-up"); // Remove the animation class when out of view
  });
}

// Intersection Observer setup
const servicesSection = document.querySelector("#services-section");
const observerOptions = {
  root: null, // Viewport as root
  threshold: 0.5, // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      applyAnimation(); // Trigger animation
    } else {
      resetAnimation();
    }
  });
}, observerOptions);

observer.observe(servicesSection);

// Handle window resize to re-render cards correctly
window.addEventListener("resize", () => {
  currentIndex = 0; // Reset to the first set of cards on resize
  renderServiceCards();
});


// Insert Features
const featuresContainer = document.getElementById("features-container");
featuresData.forEach((feature) => {
  const card = document.createElement("div");
  card.className = "feature-card";
  card.innerHTML = `
    <div class="feature-icon">${feature.icon}</div>
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  `;
  featuresContainer.appendChild(card);
});

// Intersection Observer setup for Features Section
const featuresSection = document.querySelector("#features-section");

const featuresObserverOptions = {
  root: null, // Viewport as root
  threshold: 0.4, // Trigger when 10% of the section is visible
};

const featuresObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      featuresSection.classList.add("in-view"); // Add class to trigger animation
    } else {
      featuresSection.classList.remove("in-view"); // Remove class when out of view
    }
  });
}, featuresObserverOptions);

featuresObserver.observe(featuresSection);


// Navbar scroll effect
// Toggle the menu on small screens
function toggleMenu() {
  const navbar = document.querySelector(".homepage-navbar-main-container");
  navbar.classList.toggle("menu-active");
}

// Handle scroll effect across all screen sizes
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".homepage-navbar-main-container");

  if (!navbar) {
    console.error("Navbar element not found!");
    return;
  }

  console.log("Scroll position:", window.scrollY);

  if (window.scrollY > 650) {
    navbar.classList.add("scrolled");
    console.log("Class 'scrolled' added");
  } else {
    navbar.classList.remove("scrolled");
    console.log("Class 'scrolled' removed");
  }
});


// Close the menu when resized to larger screens
window.addEventListener("resize", () => {
  const navbar = document.querySelector(".homepage-navbar-main-container");

  // If window is wider than 768px, close the mobile menu
  if (window.innerWidth > 768) {
      navbar.classList.remove("menu-active");
  }
});
