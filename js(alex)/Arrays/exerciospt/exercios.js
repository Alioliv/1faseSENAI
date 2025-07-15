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