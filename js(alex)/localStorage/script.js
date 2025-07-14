// Recupera o valor salvo no localStorage ou começa do zero
let contador = parseInt(localStorage.getItem('contador')) || 0;

// Mostra o valor inicial na página
document.getElementById('valor').textContent = contador;

// Função para incrementar
function adicionar() {
  contador++;
  atualizar();
}

// Função para decrementar
function subtrair() {
  contador--;
  atualizar();
}

// Atualiza o valor na tela e salva no localStorage
function atualizar() {
  document.getElementById('valor').textContent = contador;
  localStorage.setItem('contador', contador);
}