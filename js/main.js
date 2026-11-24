import { runSplash, shouldSkipSplash } from './splash.js';

const splash = document.getElementById('splash');
const auth = document.getElementById('auth');

function show(el) {
  el.classList.add('active');
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
}
function hide(el, cb) {
  el.classList.remove('show');
  setTimeout(() => { el.classList.remove('active'); cb && cb(); }, 500);
}
function goAuth() { show(auth); }

show(splash);

if (shouldSkipSplash()) {
  hide(splash, goAuth);
} else {
  runSplash(() => hide(splash, goAuth));
}
