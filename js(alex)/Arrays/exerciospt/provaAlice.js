//1. Filtro e transformação com ordenação (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
//maiúsculas e ordenadas de Z a A (decrescente).

const palavras =["desenvolvimento", "web", "javascript","logica","frontend"]
const resultado = palavras
.filter(p => p.length < 7)
.map(p => p.toUpperCase())// maiúscula
.sort((a, b) => b.localeCompare(a)); 

console.log(resultado)



//2. Média dos alunos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Crie um array com objetos contendo nome e notas do exemplo.
//● Retorne a um novo array com nome e a menor nota.
const aluno =[
    {nome: "Ana",notas:[8,9,10]},
    {nome: "Carlos", notas:[6,7,5]}
]

const menorNotas = aluno.map(aluno => {
    return {
    nome: aluno.nome,
    menorNota: Math.min(...aluno.notas) };
    });
    
    console.log(menorNotas);
//3. Cálculo de estoque (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● A partir do array abaixo, calcule o saldo final do estoque:

const transacoes = [
    {tipo:"entrada", valor: 100},
    {tipo:"saida", valor: 60},
    {tipo:"entrada", valor: 50},
    {tipo:"saida", valor: 30},
];
const estoque = transacoes.reduce((acc, transacoes) =>{
    return transacoes.tipo === "entrada"  ? acc + transacoes.valor : acc - transacoes.valor;
},0);

console.log(estoque)
//4. Aplicar desconto em produtos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Crie uma função que aplica 7,5% de desconto em produtos com valor >= (maior ou igual) a 5.
const produto =[
    {nome:"cadeira", valor: 150},
    {nome:"lapis",valor: 5}
];

function aplicar(produto) {
    return produto.map(item => {
        if (item.valor >= 5) {
            return {
                ...item,
                valor: item.valor * 0.7
            };
        }
        return item; 
    });
}

const ComDesconto = aplicar(produto);
console.log(ComDesconto);


//5. Verificações de dados (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Verifique quantos usuários estão logados:
const usuarios =[
    {nome: "Ana", logando: true},
    {nome: "Lucas", logando: false},
    {nome: "Beatriz", logando: true}
];
// algum logado
const algum = usuarios.some(u => u.logando);
console.log("Algum  logado?", algum ? "Sim" : "Não");

//  todos logados
const todos = usuarios.every(u => u.logando);
console.log("Todos logados?", todos ? "Sim" : "Não");



//6. Função buscar produto (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Crie uma função que busca um produto pelo preço:
const produtos =[
    {nome: "notebook", preco: 300},
    {nome: "mouse", preco:50}
];
function buscarProduto(nome) {
    return produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
  }
  
  console.log(buscarProduto("mouse")); //  mouse
  console.log(buscarProduto("capa")); // undefined 
  

//7. Listar tarefas pendentes (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Filtre as tarefas concluídas e retorne uma string com a frase “Você já concluiu essas tarefas: Tarefa
//concluída 1, Tarefa Concluída 2…*/
const tarefas = [
    {descricao: "Estudar js", concluida: true},
    {descricao: "Fazer prova", concluida: false},
    {descricao: "Enviar projeto", concluida: false},
];
 const naoRealizadas = tarefas.filter(tarefa => tarefa.concluida)
    .map(tarefa => `Você já concluiu essas tarefas: ${tarefa.descricao}`);
        
 console.log(naoRealizadas);
