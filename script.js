const canvas = document.getElementById('sparkleCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Generate sparkles
const sparkles = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 4 + 1,
  opacity: Math.random() * 0.7 + 0.3,
  speedX: Math.random() * 1 - 0.5,
  speedY: Math.random() * 1 - 0.5,
}));

// Draw sparkles
function drawSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sparkles.forEach((s) => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
    ctx.fill();
    s.x = (s.x + s.speedX + canvas.width) % canvas.width;
    s.y = (s.y + s.speedY + canvas.height) % canvas.height;
  });
  requestAnimationFrame(drawSparkles);
}
drawSparkles();
