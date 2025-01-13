// Initialize EmailJS
(function() {
  emailjs.init("4aIQlqo5USGBNLYsR"); // Replace with your actual user ID from EmailJS
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-us-pg-form");
  form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Collect form data
      // const emailID = form.querySelector('input[placeholder="Email ID"]').value;
      // const contactNumber = form.querySelector('input[placeholder="Contact Number"]').value;
      // const subject = form.querySelector('input[placeholder="Subject"]').value;
      // const message = form.querySelector('textarea[placeholder="Message"]').value;

      const emailID = form.querySelector('#email').value; // Use ID for Email ID
      const contactNumber = form.querySelector('#contact-no').value; // Use ID for Contact No.
      const subject = form.querySelector('#subject').value; // Use ID for Subject
      const message = form.querySelector('#message').value; // Use ID for Message

      // Prepare email parameters
      const emailParams = {
          from_email: emailID,
          contact_number: contactNumber, // Use this field in your EmailJS template
          subject: subject,
          message: message,
      };

      // Send email using EmailJS
      emailjs.send("service_tslce3a", "template_767k5ie", emailParams)
          .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              alert("Thank you for reaching out! We'll get back to you soon.");
              form.reset();
          }, (error) => {
              console.log('FAILED...', error);
              alert("An error occurred while sending your message. Please try again.");
          });
  });
});
