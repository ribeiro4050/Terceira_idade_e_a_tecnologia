document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
subject = encodeURIComponent('Dúvidas e Sugestões - Inclusão Digital');
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
    const mailtoLink = `mailto:mpereira@ifsp.edu.br?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});
