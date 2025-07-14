//● Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
//maiúsculas e ordenadas.

const palavras4 = ["desenvolvimento", "web", "javascript", "logica", "frontend"];

const novoArray = palavras4
  .filter(palavra => palavra.length > 7)      // 1. Filtra as palavras com mais de 7 letras
  .map(palavra => palavra.toUpperCase())      // 2. Converte para maiúsculas
  .sort();                                    // 3. Ordena em ordem alfabética

console.log(novoArray);


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



//● 3 A partir do array abaixo, calcule o saldo final do estoque:

const transacoes = [
    {tipo: "entrada", valor: 100},
    {tipo: "saida", valor: 60},
    {tipo: "entrada", valor: 50},
    {tipo: "saida", valor: 30},
];

const estoque = transacoes.reduce((acc, transacoes) =>{
    return transacoes.tipo === "entrada"  ? acc + transacoes.valor : acc - transacoes.valor;
},0); console.log(estoque)


// 4 ● Crie uma função que aplica 10% de desconto em produtos com valor > R$100

/*const produto = [
    {nome: "cadeira", valor: 150},
    {nome: "lapis", valor: 5}
]*/

const produto = [
    {nome: "cadeira", valor: 150},
    {nome: "lapis", valor: 5}
];

function aplicarDesconto(produtos) {
    return produtos.map(item => {
        if (item.valor > 100) {
            return {
                ...item,
                valor: item.valor * 0.9 // aplica 10% de desconto
            };
        }
        return item; // retorna o item sem alterações
    });
}

const produtosComDesconto = aplicarDesconto(produto);
console.log(produtosComDesconto);

    

//5 Verificações de dados 
//● Verifique se algum usuário está logado e se todos estão logados:

const usuario = [
    {nome: "Ana", logando: true},
    {nome: "Lucas", logando: false},
    {nome: "Beatriz", logando: true},
];

//6. Função buscar produto 
//● Crie uma função que busca um produto pelo nome:

const produto2 = [
    {nome: "notebook", preco: 3000},
    {nome: "Mouse", preco: 50}

];
function buscarProduto(nome) {
  return produto2.find(p => p.nome.toLowerCase() === nome.toLowerCase());
}

console.log(buscarProduto("Mouse")); // Retorna o objeto do mouse
console.log(buscarProduto("Celular")); // undefined (não encontrado)

//7. Listar tarefas pendentes 
//● Filtre as tarefas não concluídas e liste com prefixo "Pendente: ...":

const tarefas = [
    {descricao: "estudar JS", concluida: true},
    {descricao: "Fazer prova", concluida: false},
    {descricao: "Enviar projeto", concluida: false}
];
function buscarProduto(nome) {
  return produtos2.find(p => p.nome.toLowerCase() === nome.toLowerCase());
}

console.log(buscarProduto("Mouse")); // Retorna o objeto do mouse
console.log(buscarProduto("Celular")); // undefined (não encontrado)