const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

//  números


const maioresQue10 = numeros.filter(n => n > 10);
console.log("Maiores que 10:", maioresQue10);

const dobrados = numeros.map(n => n * 2);
console.log("Dobro dos números:", dobrados);

const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log("Soma dos números:", soma);

const maior = Math.max(...numeros);
console.log("Maior número:", maior);

const menor = Math.min(...numeros);
console.log("Menor número:", menor);

const ordenados = [...numeros].sort((a, b) => a - b);
console.log("Ordenados crescente:", ordenados);

const impares = numeros.filter(n => n % 2 !== 0);
console.log("Números ímpares:", impares);

const todosMaioresQue3 = numeros.every(n => n > 3);
console.log("Todos maiores que 3?", todosMaioresQue3);

const algumMaiorQue100 = numeros.some(n => n > 100);
console.log("Algum maior que 100?", algumMaiorQue100);

const media = soma / numeros.length;
console.log("Média dos números:", media);

// Exercícios com nomes
const nomesOrdenados = [...nomes].sort();
console.log("Nomes ordenados:", nomesOrdenados);

const nomesComMaisDe5 = nomes.filter(n => n.length > 5);
console.log("Nomes com mais de 5 letras:", nomesComMaisDe5);

const nomesMinusculos = nomes.map(n => n.toLowerCase());
console.log("Nomes em minúsculo:", nomesMinusculos);

const algumComecaComB = nomes.some(n => n.startsWith("B"));
console.log("Algum nome começa com B?", algumComecaComB);

const contemDaniel = nomes.includes("Daniel");
console.log("Contém 'Daniel'?", contemDaniel);

const tamanhoNomes = nomes.map(n => n.length);
console.log("Quantidade de letras de cada nome:", tamanhoNomes);

const nomesJuntos = nomes.join(", ");
console.log("Nomes unidos por vírgula:", nomesJuntos);

// produtos
const eletronicos = produtos.filter(p => p.categoria === "Eletrônicos");
console.log("Produtos eletrônicos:", eletronicos);

const nomesProdutos = produtos.map(p => p.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const descontos = produtos.map(p => ({
  nome: p.nome,
  preco: (p.preco * 0.9).toFixed(2)
}));
console.log("Produtos com 10% de desconto:", descontos);

const totalProdutos = produtos.reduce((acc, p) => acc + p.preco, 0);
console.log("Valor total dos produtos:", totalProdutos);

const maisCaro = produtos.reduce((a, b) => a.preco > b.preco ? a : b);
console.log("Produto mais caro:", maisCaro);

const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
console.log("Produtos ordenados por preço:", produtosOrdenados);

const agrupadosPorCategoria = produtos.reduce((acc, p) => {
  acc[p.categoria] = acc[p.categoria] || [];
  acc[p.categoria].push(p);
  return acc;
}, {});
console.log("Agrupados por categoria:", agrupadosPorCategoria);

function produtosPorCategoria(categoria) {
  return produtos.filter(p => p.categoria === categoria);
}
console.log("Produtos da categoria Roupas:", produtosPorCategoria("Roupas"));

const nomePreco = produtos.map(p => ({ nome: p.nome, preco: p.preco }));
console.log("Nome e preço dos produtos:", nomePreco);

const todosMaisDe5 = produtos.every(p => p.preco > 5);
console.log("Todos os produtos custam mais de R$5?", todosMaisDe5);

// Desafios 
const quadradosPares = numeros.filter(n => n % 2 === 0).map(n => n ** 2);
console.log("Quadrados dos pares:", quadradosPares);

const nomeMaisLongo = nomes.reduce((a, b) => a.length > b.length ? a : b);
console.log("Nome com mais letras:", nomeMaisLongo);

const terminaComVogal = nomes.every(n => /[aeiou]$/i.test(n));
console.log("Todos os nomes terminam com vogal?", terminaComVogal);

const unidos = [...numeros, ...nomes];
console.log("Números + nomes unidos:", unidos);

const roupasBaratas = produtos.filter(p => p.preco < 100 && p.categoria === "Roupas");
console.log("Roupas com preço < R$100:", roupasBaratas);

function mediaEletronicos() {
  const eletros = produtos.filter(p => p.categoria === "Eletrônicos");
  const soma = eletros.reduce((acc, p) => acc + p.preco, 0);
  return (soma / eletros.length).toFixed(2);
}
console.log("Média dos eletrônicos:", mediaEletronicos());