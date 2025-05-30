function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const numeroCliente = telefone.replace(/\D/g, '');

  if (numeroCliente.length < 10 || numeroCliente.length > 15) {
    alert('Por favor, insira um número válido com DDD e número, apenas números.');
    return;
  }

  const numeroAllana = '5513981550121';
  const texto = `Olá, me chamo ${nome}, ${mensagem}`;
  const mensagemCodificada = encodeURIComponent(texto);

  const url = `https://api.whatsapp.com/send?phone=${numeroAllana}&text=${mensagemCodificada}`;
  window.open(url, '_blank');
}

window.addEventListener('load', () => {
  const secoes = document.querySelectorAll('.secao.animar');
  secoes.forEach(secao => {
    secao.classList.add('visivel');
  });
});

const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const navMenu = document.getElementById('nav-menu');

btnMenu.addEventListener('click', () => {
  navMenu.classList.add('ativo');
  btnMenu.style.display = 'none';
  btnFechar.style.display = 'block';
});

btnFechar.addEventListener('click', () => {
  navMenu.classList.remove('ativo');
  btnMenu.style.display = 'flex';
  btnFechar.style.display = 'none';
});

const linksMenu = navMenu.querySelectorAll('a');
linksMenu.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    navMenu.classList.remove('ativo');
    btnMenu.style.display = 'flex';
    btnFechar.style.display = 'none';

    targetSection.classList.remove('visivel');
    targetSection.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      targetSection.classList.add('visivel');
    }, 300);
  });
});
