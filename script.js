function enviarWhatsApp(event) {
  event.preventDefault();

  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Validação básica
  if (!telefone || !mensagem) {
    alert('Por favor, preencha o número de WhatsApp e a mensagem.');
    return;
  }

  // Limpa números não numéricos só por garantia
  const numeroLimpo = telefone.replace(/\D/g, '');

  if (numeroLimpo.length < 10 || numeroLimpo.length > 15) {
    alert('Por favor, insira um número válido com DDD e número, apenas números.');
    return;
  }

  // Codifica mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // URL do WhatsApp API para enviar mensagem
  const url = `https://api.whatsapp.com/send?phone=${numeroLimpo}&text=${mensagemCodificada}`;

  // Abre nova aba para enviar a mensagem diretamente no WhatsApp Web ou app
  window.open(url, '_blank');
}

// Animação ao carregar a página para mostrar seções
window.addEventListener('load', () => {
  const secoes = document.querySelectorAll('.secao.animar');
  secoes.forEach(secao => {
    secao.classList.add('visivel');
  });
});
