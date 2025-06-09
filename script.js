// Menu mobile toggle
const btnMenu = document.getElementById("btn-menu");
const navMenu = document.getElementById("nav-menu");
const btnFechar = document.getElementById("btn-fechar");

btnMenu.addEventListener("click", () => {
  navMenu.classList.add("aberto");
  btnMenu.style.display = "none";
  btnFechar.style.display = "flex";
});

btnFechar.addEventListener("click", () => {
  navMenu.classList.remove("aberto");
  btnFechar.style.display = "none";
  btnMenu.style.display = "flex";
});

// Fechar menu ao clicar em link (somente no mobile)
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("aberto");
      btnFechar.style.display = "none";
      btnMenu.style.display = "flex";
    }
  });
});

// Animação de entrada das seções ao rolar a página
const sections = document.querySelectorAll(".section");

function revealSections() {
  const triggerHeight = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerHeight) {
      section.classList.add("visivel");
    }
  });
}

// Header background on scroll (com lilás)
function updateHeaderOnScroll() {
  const header = document.querySelector(".header");
  const scrolled = window.scrollY > 50;

  if (scrolled) {
    header.style.background = "var(--primary-300)";
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "var(--primary-200)";
    header.style.boxShadow = "none";
  }
}

// Event listeners
window.addEventListener("scroll", () => {
  revealSections();
  updateHeaderOnScroll();
});

window.addEventListener("load", () => {
  revealSections();
  updateHeaderOnScroll();
});

// Smooth scrolling for navigation links com compensação do header
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight + 10;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Função para enviar mensagem pelo WhatsApp
function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const telefoneNumeros = telefone.replace(/\D/g, '');

  if (telefoneNumeros.length < 10 || telefoneNumeros.length > 15) {
    alert("Por favor, insira um número de WhatsApp válido (10 a 15 dígitos).");
    return;
  }

  if (!nome || !mensagem) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const textoMensagem = `Olá, meu nome é ${nome}. ${mensagem}`;
  const url = `https://api.whatsapp.com/send?phone=55${telefoneNumeros}&text=${encodeURIComponent(textoMensagem)}`;

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.style.opacity = '0.7';
  submitBtn.innerHTML = `
    <span class="btn-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    </span>
    Redirecionando...
  `;

  setTimeout(() => {
    window.open(url, "_blank");
    submitBtn.style.opacity = '1';
    submitBtn.innerHTML = originalText;
    document.getElementById("formulario-contato").reset();
  }, 1000);
}

// Melhorias no formulário
document.addEventListener('DOMContentLoaded', function () {
  // Formatação automática do telefone
  const telefoneInput = document.getElementById("telefone");

  telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length >= 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 7) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }

    e.target.value = value;
  });

  // Animação de foco nos inputs
  const inputs = document.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      this.parentElement.style.transform = 'scale(1.02)';
      this.parentElement.style.transition = 'transform 0.2s ease';
    });

    input.addEventListener('blur', function () {
      this.parentElement.style.transform = 'scale(1)';
    });
  });
});

// Parallax no fundo
function handleParallax() {
  const scrolled = window.pageYOffset;
  const backgroundGradient = document.querySelector('.background-gradient');

  if (backgroundGradient) {
    backgroundGradient.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
}

window.addEventListener('scroll', handleParallax);

// Inicializar animações ao carregar
document.addEventListener('DOMContentLoaded', function () {
  const heroSection = document.querySelector('#inicio');
  if (heroSection) {
    heroSection.classList.add('visivel');
  }

  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});
