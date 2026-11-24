// Interface de criar conta / entrar.
// Validação local. O servidor real entra na próxima parte.
const $ = id => document.getElementById(id);

// Botão de olho
document.querySelectorAll('.eye').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = $(btn.dataset.target);
    const hidden = input.type === 'password';
    input.type = hidden ? 'text' : 'password';
    btn.textContent = hidden ? '🙈' : '👁';
  });
});

// Criar conta
$('c-go').addEventListener('click', () => {
  const user = $('c-user').value.trim();
  const pass = $('c-pass').value;
  const msg = $('c-msg');
  msg.className = 'note err';
  if (user.length < 3) return msg.textContent = 'O nome deve ter pelo menos 3 caracteres.';
  if (!/^[\w.-]+$/.test(user)) return msg.textContent = 'Use só letras, números, _ . -';
  if (pass.length < 10) return msg.textContent = 'A senha precisa ter no mínimo 10 caracteres.';
  if (pass.length > 30) return msg.textContent = 'A senha pode ter no máximo 30 caracteres.';
  msg.className = 'note ok';
  msg.textContent = 'Dados válidos! Falta o servidor para salvar a conta (próximo passo).';
});

// Entrar
$('e-search').addEventListener('click', () => {
  const msg = $('e-msg');
  msg.className = 'note err';
  msg.textContent = $('e-user').value.trim()
    ? 'Busca de conta precisa do servidor (próximo passo).'
    : 'Digite o nome da conta.';
});
$('e-go').addEventListener('click', () => {
  const msg = $('e-msg');
  msg.className = 'note err';
  msg.textContent = (!$('e-user').value.trim() || !$('e-pass').value)
    ? 'Preencha nome e senha.'
    : 'Login real precisa do servidor (próximo passo).';
});
