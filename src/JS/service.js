// Sample data for cards
const cards = [
    { id: 1, title: 'Web Development', description: 'From design to deployment, we craft websites that deliver seamless user experiences and drive growth.', img: './src/assets/fullstack.jpg' },
    { id: 2, title: 'Mobile Application', description: 'Design and develop mobile apps that offer intuitive user experiences and meet your business objectives on both iOS and Android.',  img: './src/assets/appdev.jpeg' },
    { id: 3, title: 'AI & ML', description: 'Artificial Intelligence & Machine Learning', description: 'Leverage AI to automate processes, gain insights, and drive smarter decision-making with our advanced machine learning solutions.' ,  img: './src/assets/aiml.jpg' },
    { id: 4, title: 'Graphic Designing', description: 'Transform your ideas into compelling visuals with customized graphic design services that reflect your unique identity.',  img: './src/assets/graphic.jpg' },
    { id: 5, title: 'QA & Testing', description: 'Ensure the quality and performance of your software with our rigorous testing and quality assurance processes.',  img: './src/assets/QA.jpg' },
    { id: 6, title: 'UI UX', description: 'Deliver seamless, engaging, and user-friendly designs that enhance customer interactions and satisfaction.',  img: './src/assets/uiux1.jpg' },
    { id: 7, title: 'Support & Maintainance', description: 'At Protonix Ai, we keep your systems running smoothly with our round-the-clock support and proactive maintenance services.',  img: './src/assets/suppport.jpg' },
    { id: 8, title: 'Digital Marketing', description: 'We offer digital marketing services—SEO, social media, content marketing, email, and paid ads—enhanced by AI-driven tools like predictive analytics and chatbots for higher engagement and conversions. Using data insights, we tailor strategies for measurable growth, whether you are a startup or an established business.',  img: './src/assets/digital.jpg' },
    { id: 9, title: 'VAPT Testing', description: 'Vulnerability Assessment and Penetration Testing (VAPT) helps identify security vulnerabilities in your systems and applications. Our VAPT services offer comprehensive analysis to detect weaknesses, providing actionable insights to enhance your security posture and safeguard against potential cyber threats.',  img: './src/assets/vapt.jpg'},


  ];
  
  // Render cards
  const cardContainer = document.getElementById("service-cards");
  cards.forEach(card => {
    const cardElement = `
      <div class="service-pg-card">
        <div class="service-pg-card-inner">
          <div class="service-pg-card-front">
            <img src="${card.img}" alt="${card.title}" 
            class="service-pg-card-image">
          </div>
          <div class="service-pg-card-back">
            <div class="service-pg-card-content">
              <p class="service-pg-card-title">${card.title}</p>
              <p class="service-pg-card-description">${card.description}</p>
            </div>
          </div>
        </div>
                              <p class="service-pg-card-title">${card.title}</p> <!-- Title below the image -->

      </div>
    `;
    cardContainer.innerHTML += cardElement;
  });
  