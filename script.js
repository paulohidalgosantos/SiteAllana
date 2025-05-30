// Menu mobile toggle
const btnMenu = document.getElementById("btn-menu");
const navMenu = document.getElementById("nav-menu");
const btnFechar = document.getElementById("btn-fechar");

btnMenu.addEventListener("click", () => {
  navMenu.classList.add("aberto");
  btnMenu.style.display = "none";
  btnFechar.style.display = "block";
});

btnFechar.addEventListener("click", () => {
  navMenu.classList.remove("aberto");
  btnFechar.style.display = "none";
  btnMenu.style.display = "flex";
});

// Fechar menu ao clicar em link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("aberto");
    btnFechar.style.display = "none";
    btnMenu.style.display = "flex";
  });
});

// Animação de entrada das seções ao rolar a página
const animarItens = document.querySelectorAll(".animar");

function mostrarAnimacao() {
  const triggerBottom = window.innerHeight * 0.85;

  animarItens.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("visivel");
    }
  });
}

window.addEventListener("scroll", mostrarAnimacao);
window.addEventListener("load", mostrarAnimacao);

// Função para enviar mensagem pelo WhatsApp pelo formulário
function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Valida telefone simples (somente números, 10 a 15 dígitos)
  if (!/^\d{10,15}$/.test(telefone)) {
    alert("Por favor, insira um número de WhatsApp válido (somente números, 10 a 15 dígitos).");
    return;
  }

  const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
  const url = `https://api.whatsapp.com/send?phone=55${telefone}&text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}
