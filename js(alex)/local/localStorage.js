// 1. Contador
let contador = localStorage.getItem('contador') || 0;
document.getElementById('contador').textContent = contador;
function alterarContador(valor) {
  contador = parseInt(contador) + valor;
  localStorage.setItem('contador', contador);
  document.getElementById('contador').textContent = contador;
}

// 2. Texto Salvo
const textoSalvo = document.getElementById('textoSalvo');
textoSalvo.value = localStorage.getItem('texto') || '';
textoSalvo.addEventListener('input', () => {
  localStorage.setItem('texto', textoSalvo.value);
});

// 3. Checkbox Persistente
const lista = JSON.parse(localStorage.getItem('tarefas')) || [];
const listaElement = document.getElementById('lista-tarefas');
function renderizarTarefas() {
  listaElement.innerHTML = '';
  lista.forEach((t, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${t.feito ? 'checked' : ''} onchange="toggleTarefa(${i})">
      ${t.nome}
    `;
    listaElement.appendChild(li);
  });
  localStorage.setItem('tarefas', JSON.stringify(lista));
}
function adicionarTarefa() {
  const nome = document.getElementById('novaTarefa').value;
  if (nome) {
    lista.push({ nome, feito: false });
    renderizarTarefas();
    document.getElementById('novaTarefa').value = '';
  }
}
function toggleTarefa(i) {
  lista[i].feito = !lista[i].feito;
  renderizarTarefas();
}
renderizarTarefas();

// 4. Nome do Usuário
let nome = localStorage.getItem('nome');
if (!nome) {
  nome = prompt('Qual seu nome?');
  localStorage.setItem('nome', nome);
}
document.getElementById('boas-vindas').textContent = `Olá, ${nome}!`;

// 5. Escolha de Cor
const corSalva = localStorage.getItem('cor-fundo');
if (corSalva) document.body.style.backgroundColor = corSalva;
function mudarCor(cor) {
  document.body.style.backgroundColor = cor;
  localStorage.setItem('cor-fundo', cor);
}

// 6. Modo Noturno
if (localStorage.getItem('modo-escuro') === 'true') {
  document.body.classList.add('dark');
}
function alternarModoEscuro() {
  document.body.classList.toggle('dark');
  const escuroAtivo = document.body.classList.contains('dark');
  localStorage.setItem('modo-escuro', escuroAtivo);
}

// 7. Visita Diária
const hoje = new Date().toLocaleDateString();
const ultimaVisitaDia = localStorage.getItem('data-visita');
document.getElementById('mensagemDia').textContent =
  ultimaVisitaDia === hoje ? 'Bem-vindo de volta!' : 'Saudades de você!';
localStorage.setItem('data-visita', hoje);

// 8. Última Visita
const agora = new Date();
const ultimaDataHora = localStorage.getItem('ultima-visita');
if (ultimaDataHora) {
  document.getElementById('ultima-visita').textContent = `Última visita: ${ultimaDataHora}`;
}
localStorage.setItem('ultima-visita', agora.toLocaleString());

// 9. Mensagem Personalizada
const msgSalva = localStorage.getItem('mensagem');
if (msgSalva) {
  document.getElementById('mensagem-personalizada').textContent = msgSalva;
}
function salvarMensagem() {
  const msg = document.getElementById('mensagemInput').value;
  localStorage.setItem('mensagem', msg);
  document.getElementById('mensagem-personalizada').textContent = msg;
}

// 10. Número Secreto
let numeroSecreto = localStorage.getItem('numero-secreto');
if (!numeroSecreto) {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  localStorage.setItem('numero-secreto', numeroSecreto);
}
function verificarPalpite() {
  const palpite = parseInt(document.getElementById('palpite').value);
  const resposta = document.getElementById('resposta-palpite');
  if (palpite === parseInt(numeroSecreto)) {
    resposta.textContent = 'Acertou!';
    localStorage.removeItem('numero-secreto');
  } else {
    resposta.textContent = 'Tente novamente!';
  }
}
