// === Animação de entrada do conteúdo ===
document.addEventListener("DOMContentLoaded", () => { 
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease';
        hero.style.opacity = 1;
    }, 300);
});

// === Cursor personalizado ===
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const speed = 0.2;

// Captura posição do mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Movimenta suavemente o cursor
function animateCursor() {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;
    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Efeito hover em botões e links
document.querySelectorAll('.btn, nav a, .logo img').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Mostrar/ocultar cursor quando sai/entra da tela
document.addEventListener('mouseleave', () => cursor.classList.add('hidden'));
document.addEventListener('mouseenter', () => cursor.classList.remove('hidden'));

// === Chuva de binários (Matrix) ===
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Função para ajustar tamanho do canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// Configurações da chuva
const letters = "01";
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

// Função principal da animação Matrix
function drawMatrix() {
    // Fundo semitransparente cria rastro suave
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF99"; // cor verde neon
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reinicia gota aleatoriamente para efeito contínuo
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    requestAnimationFrame(drawMatrix); // mantém a animação contínua
}
drawMatrix();

// Atualiza canvas e drops ao redimensionar
window.addEventListener("resize", () => {
    resizeCanvas();
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
});
