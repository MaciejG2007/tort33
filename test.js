const candle = document.getElementById('candle');
const flame = document.getElementById('flame');

candle.addEventListener('mouseenter', () => {
  flame.style.transform = 'scaleY(1)';
});

candle.addEventListener('mouseleave', () => {
  flame.style.transform = 'scaleY(0)';
});