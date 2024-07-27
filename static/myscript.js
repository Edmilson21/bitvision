const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  btn.value = 'Sending...'; // Update button text for user feedback

  const serviceID = 'default_service';
  const templateID = 'template_2j2hnub';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email'; // Reset button text
      alert('¡Mensaje enviado!'); // Success message in Spanish

      // Clear form fields (optional)
      form.reset();
    }, (err) => {
      btn.value = 'Send Email'; // Reset button text
      alert(JSON.stringify(err)); // Error message
    });
});
