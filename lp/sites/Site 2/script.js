document.getElementById("contactForm").addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const assunto = document.getElementById("mensagem").value;
    const mensagem = `Gostaria de entrar em contato!\n\nNome: ${nome}\nAssunto: ${assunto}`;
    
    const msg = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5541995196555?text=${msg}`, '_blank');
     
});
