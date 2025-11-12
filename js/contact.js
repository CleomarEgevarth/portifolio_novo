// Inicializa EmailJS
(function() {
  emailjs.init("BUwjEmDs6qr3Vg_jh"); // sua Public Key
})();

// Captura o formulário
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Envia formulário usando EmailJS
  emailjs.sendForm('service_urpv8i7', 'template_ijqbcl4', this)
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.reset();
    }, (err) => {
      console.error('Erro ao enviar a mensagem:', err);
      alert('Ocorreu um erro. Tente novamente.');
    });
});
