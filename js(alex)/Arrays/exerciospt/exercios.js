//Filtrar e transformar palavras
//Filtrar palavras com mais de 4 caracteres, transformá-las para maiúsculas e ordenar de A a Z.

const palavras = ['Javascript', 'HTML', 'CSS', 'Node', 'React'];

const novoArry = palavras
.filter(palavra => palavra.length < 4)
.map(palavra => palavra.toUpperCase()) // maiúsculas
.sort();
console.log(novoArry)


//2. Média de avaliações com arredondamento
//Calcular a média das notas de cada aluno, arredondada para o número inteiro mais próximo.

//2Média dos alunos
//● Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média.

const aluno = [
  { nome: "Ana", notas: [8, 9, 10] },
  { nome: "Carlos", notas: [6, 7, 5] }
];

// Cria novo array com nome e média
const arryMedia = aluno.map(a => {
  const soma = a.notas.reduce((acc, nota) => acc + nota, 0); // soma as notas
  const media = soma / a.notas.length; // divide pela quantidade de notas
  return {
    nome: a.nome,
    media: media
  };
});

console.log(arryMedia);


//Calcular Total de Vendas
//Calcular o total de vendas após diversas operações de compra e venda. 
//Uma venda deve subtrair o valor da quantidade da compra inicial.

const movimentacoes = [
    { operacao: 'compra', quantidade: 100 },
    { operacao: 'venda', quantidade: 30 },
    { operacao: 'compra', quantidade: 50 },
    { operacao: 'venda', quantidade: 40 }
];

const totalVendas = movimentacoes.reduce((total, item) => {
  return item.operacao === 'venda' ? total + item.quantidade : total;
}, 0);

console.log(totalVendas);


//Ajustar Preço de Produtos
//Ajustar o preço dos produtos aumentando 10% para os produtos com preço acima de 50.

const produtos = [
    { nome: 'Produto A', preco: 30 },
    { nome: 'Produto B', preco: 60 },
    { nome: 'Produto C', preco: 10 }
];

const produtosAjustados = produtos.map(produto => {
    if (produto.preco > 50) {
        return { ...produto, preco: produto.preco * 1.1 };
    }
    return produto;
});

console.log(produtosAjustados);

// Verificar Disponibilidade de Produtos
//Verificar se existe ao menos um produto disponível em estoque e se todos os produtos estão dentro da validade.

const produto = [
    { nome: "Produto A", emEstoque: true, dentroValidade: true },
    { nome: "Produto B", emEstoque: false, dentroValidade: true },
    { nome: "Produto C", emEstoque: true, dentroValidade: false }
];

const estoque = produto.some(produtos => produtos.emEstoque )
const validade = produto.every(produtos => produtos.dentroValidade)

console.log("todos produtos disponiveis:",estoque)// true 
console.log("todos produtos na validade:",validade)// false 

//6. Buscar Funcionário por Nome
//Buscar funcionário pelo nome ou retornar "Funcionário não encontrado".


const funcionarios = [
    { nome: "Maria", cargo: "Desenvolvedora" },
    { nome: "José", cargo: "Gerente" }
];

function buscarFuncionario(nomeFuncionario) {
  const funcionario = funcionarios.find(f => f.nome.toLowerCase() === nomeFuncionario.toLowerCase());
  return funcionario || "Funcionário não encontrado";
}

console.log(buscarFuncionario("Maria"));
console.log(buscarFuncionario("Carlos"));
