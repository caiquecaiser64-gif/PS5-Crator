// Controla a animação de inicialização.
// A splash só aparece 1 vez por sessão do navegador.
const KEY = 'ps5c_splash_done';

export function shouldSkipSplash() {
  try { return sessionStorage.getItem(KEY) === '1'; }
  catch { return false; }
}

export function runSplash(onDone) {
  const bar = document.getElementById('loader-bar');
  const text = document.getElementById('loader-text');
  const steps = [
    [25, 'Carregando interface...'],
    [55, 'Preparando recursos...'],
    [85, 'Quase pronto...'],
    [100, 'Pronto!']
  ];
  let i = 0;
  const tick = () => {
    if (i >= steps.length) {
      try { sessionStorage.setItem(KEY, '1'); } catch {}
      setTimeout(onDone, 400);
      return;
    }
    bar.style.width = steps[i][0] + '%';
    text.textContent = steps[i][1];
    i++;
    setTimeout(tick, 600);
  };
  tick();
}
