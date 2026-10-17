// ===== CONFIGURAÇÃO =====
// Coloque o WhatsApp real do cliente aqui (só números, com DDD). Ex: "5511999999999"
// Enquanto estiver vazio, o botão apenas leva para a seção de contato.
const WHATSAPP = "";
const MENSAGEM = "Olá Henrique, vi seu site e gostaria de um orçamento.";

// Fotos: coloque arquivos galeria-1.jpg ... galeria-6.jpg na pasta "imagens".
// Para a foto de destaque, use imagens/hero.jpg
const TOTAL_FOTOS = 6;

// ===== WhatsApp =====
document.querySelectorAll("[data-whats]").forEach(a => {
  if (WHATSAPP) {
    a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;
    a.target = "_blank";
    a.rel = "noopener";
  } else if (!a.getAttribute("href") || a.getAttribute("href") === "#") {
    a.href = "#contato";
  }
});

// ===== Galeria (usa foto se existir, senão mostra espaço reservado) =====
const grid = document.getElementById("galeria-grid");
for (let i = 1; i <= TOTAL_FOTOS; i++) {
  const box = document.createElement("div");
  box.className = "foto reveal";
  box.textContent = "Foto do trabalho " + i;
  const img = new Image();
  img.alt = "Trabalho de vidraçaria " + i;
  img.onload = () => { box.textContent = ""; box.classList.add("tem"); box.appendChild(img); };
  img.src = `imagens/galeria-${i}.jpg`;
  grid.appendChild(box);
}

// ===== Menu mobile =====
const menu = document.getElementById("menu");
document.getElementById("menuBtn").addEventListener("click", () => menu.classList.toggle("aberto"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("aberto")));

// ===== Animação ao rolar =====
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("on"); obs.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
