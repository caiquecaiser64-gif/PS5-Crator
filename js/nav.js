const screens = () => document.querySelectorAll('.screen');

export function go(id) {
  const target = document.getElementById(id);
  if (!target) return;
  screens().forEach(s => {
    if (s !== target && s.classList.contains('active')) {
      s.classList.remove('show');
      setTimeout(() => s.classList.remove('active'), 400);
    }
  });
  setTimeout(() => {
    target.classList.add('active');
    requestAnimationFrame(() => requestAnimationFrame(() => target.classList.add('show')));
  }, 200);
}
