// Arrays fornecidos
const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

// Exercícios com números


console.log("Exercícios com números:");

const maioresQue10 = numeros.filter(n => n > 10);
console.log("1. Números maiores que 10:", maioresQue10);

const dobrados = numeros.map(n => n * 2);
console.log("2. Dobro dos números:", dobrados);

const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log("3. Soma dos números:", soma);

let maior = numeros[0];
numeros.forEach(n => {
  if (n > maior) maior = n;
});
console.log("4. Maior número:", maior);

let menor = numeros[0];
numeros.forEach(n => {
  if (n < menor) menor = n;
});
console.log("5. Menor número:", menor);

const numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log("6. Números em ordem crescente:", numerosOrdenados);

const impares = numeros.filter(n => n % 2 !== 0);
console.log("7. Números ímpares:", impares);

const todosMaioresQue3 = numeros.every(n => n > 3);
console.log("8. Todos maiores que 3:", todosMaioresQue3);

const algumMaiorQue100 = numeros.some(n => n > 100);
console.log("9. Algum maior que 100:", algumMaiorQue100);

const media = soma / numeros.length;
console.log("10. Média dos números:", media);


// Exercícios com nomes


console.log("\nExercícios com nomes:");

const nomesOrdenados = [...nomes].sort();
console.log("1. Ordem alfabética:", nomesOrdenados);

const nomesComMaisDe5Letras = nomes.filter(nome => nome.length > 5);
console.log("2. Nomes com mais de 5 letras:", nomesComMaisDe5Letras);

const nomesMinusculos = nomes.map(nome => nome.toLowerCase());
console.log("3. Todos em minúsculo:", nomesMinusculos);

const algumComecaComB = nomes.some(nome => nome[0] === "B");
console.log("4. Algum nome começa com 'B':", algumComecaComB);

const temDaniel = nomes.includes("Daniel");
console.log("5. Existe o nome 'Daniel':", temDaniel);

const tamanhoDeCadaNome = nomes.map(nome => nome.length);
console.log("6. Quantidade de letras de cada nome:", tamanhoDeCadaNome);

const nomesJuntos = nomes.join(", ");
console.log("7. Todos os nomes juntos:", nomesJuntos);


// Exercícios com produtos


console.log("\nExercícios com produtos:");

const somenteEletronicos = produtos.filter(p => p.categoria === "Eletrônicos");
console.log("1. Produtos da categoria 'Eletrônicos':", somenteEletronicos);

const nomesProdutos = produtos.map(p => p.nome);
console.log("2. Nomes dos produtos:", nomesProdutos);

const comDesconto = produtos.map(p => ({
  nome: p.nome,
  preco: p.preco * 0.9,
  categoria: p.categoria
}));
console.log("3. Produtos com 10% de desconto:", comDesconto);

const valorTotal = produtos.reduce((total, p) => total + p.preco, 0);
console.log("4. Valor total dos produtos:", valorTotal);

let maisCaro = produtos[0];
produtos.forEach(p => {
  if (p.preco > maisCaro.preco) maisCaro = p;
});
console.log("5. Produto mais caro:", maisCaro);

const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
console.log("6. Produtos do mais barato ao mais caro:", produtosOrdenados);

const agrupadosPorCategoria = produtos.reduce((grupo, p) => {
  if (!grupo[p.categoria]) {
    grupo[p.categoria] = [];
  }
  grupo[p.categoria].push(p);
  return grupo;
}, {});
console.log("7. Agrupados por categoria:", agrupadosPorCategoria);

function produtosPorCategoria(categoria) {
  return produtos.filter(p => p.categoria === categoria);
}
console.log("8. Produtos da categoria 'Roupas':", produtosPorCategoria("Roupas"));

const nomePreco = produtos.map(p => ({ nome: p.nome, preco: p.preco }));
console.log("9. Array com nome e preço:", nomePreco);

const todosAcimaDe5 = produtos.every(p => p.preco > 5);
console.log("10. Todos custam mais de R$5:", todosAcimaDe5);


// Bônus (Desafios com lógica)


console.log("\nDesafios (Bônus):");

const quadradoDosPares = numeros
  .filter(n => n % 2 === 0)
  .map(n => n * n);
console.log("1. Quadrado dos números pares:", quadradoDosPares);

let nomeMaior = nomes[0];
nomes.forEach(nome => {
  if (nome.length > nomeMaior.length) nomeMaior = nome;
});
console.log("2. Nome com mais letras:", nomeMaior);

const terminamComVogal = nomes.every(nome => {
  const ultimaLetra = nome[nome.length - 1].toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(ultimaLetra);
});
console.log("3. Todos os nomes terminam com vogal:", terminamComVogal);

const numerosENomes = [...numeros, ...nomes];
console.log("4. Números e nomes unidos:", numerosENomes);

const roupasBaratas = produtos.filter(p => p.preco < 100 && p.categoria === "Roupas");
console.log("5. Produtos de 'Roupas' com preço < R$100:", roupasBaratas);

function mediaEletronicos() {
  const eletronicos = produtos.filter(p => p.categoria === "Eletrônicos");
  const total = eletronicos.reduce((acc, p) => acc + p.preco, 0);
  return total / eletronicos.length;
}
console.log("6. Média dos produtos da categoria 'Eletrônicos':", mediaEletronicos());
