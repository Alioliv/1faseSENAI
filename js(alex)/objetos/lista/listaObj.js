


//1. Catálogo de Produtos

const catalogo = [
  { nome: "Camiseta", preco: 49.9 },
  { nome: "Tênis", preco: 199.9 },
  { nome: "Calça", preco: 129.9 }
];

function buscarProduto(nome) {
  return catalogo.find(produto => produto.nome === nome);
}

console.log(buscarProduto("Tênis"));
// 2. Sistema de Biblioteca

const livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  emprestado: false,
  emprestar() {
    this.emprestado = true;
  },
  devolver() {
    this.emprestado = false;
  }
};

livro.emprestar();
console.log(livro);
livro.devolver();
console.log(livro);
// 3. Conversor de Temperatura

const conversor = {
  celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32;
  },
  fahrenheitParaCelsius(f) {
    return (f - 32) * 5/9;
  }
};

console.log(conversor.celsiusParaFahrenheit(0));  // 32
console.log(conversor.fahrenheitParaCelsius(100)); // 37.78
//4. Agenda de Contatos

const agenda = {
  contatos: [],
  adicionar(nome, telefone) {
    this.contatos.push({ nome, telefone });
  },
  remover(nome) {
    this.contatos = this.contatos.filter(c => c.nome !== nome);
  },
  listar() {
    console.log(this.contatos);
  }
};

agenda.adicionar("Ana", "99999-0000");
agenda.adicionar("João", "98888-1111");
agenda.listar();
agenda.remover("Ana");
agenda.listar();
// 5. Relatório de Notas

const aluno = {
  nome: "Lucas",
  notas: { matematica: 8, portugues: 7, ciencias: 6 },
  media() {
    const valores = Object.values(this.notas);
    const soma = valores.reduce((acc, n) => acc + n, 0);
    return soma / valores.length;
  }
};

console.log("Média:", aluno.media());
// Carrinho de Compras

const carrinho = {
  itens: [],
  adicionarItem(nome, quantidade, valor) {
    this.itens.push({ nome, quantidade, valor });
  },
  removerItem(nome) {
    this.itens = this.itens.filter(item => item.nome !== nome);
  },
  total() {
    return this.itens.reduce((acc, item) => acc + (item.valor * item.quantidade), 0);
  }
};

carrinho.adicionarItem("Livro", 2, 30);
carrinho.adicionarItem("Lápis", 5, 2);
console.log("Total:", carrinho.total());
carrinho.removerItem("Lápis");
console.log("Total após remover:", carrinho.total());

// 7. Filtrar Alunos Aprovados

const alunos = [
  { nome: "Paula", media: 7 },
  { nome: "Carlos", media: 5 },
  { nome: "Marina", media: 8 }
];

const aprovados = alunos.filter(a => a.media > 6).map(a => a.nome);
console.log("Aprovados:", aprovados);
// 8. Conversor de Moedas

const moeda = {
  taxas: { USD: 5.1, EUR: 5.5 },
  converter(valor, de, para) {
    const emReais = valor / this.taxas[de];
    return emReais * this.taxas[para];
  }
};

console.log(moeda.converter(10, "USD", "EUR").toFixed(2));
