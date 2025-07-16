//Dado o array abaixo com alunos e suas notas em diferentes matérias, crie um novo array contendo o nome e a maior nota de cada aluno.
const alunos = [
  { nome: "João", notas: [8, 7, 9] },
  { nome: "Maria", notas: [5, 6, 10] },
  { nome: "Carlos", notas: [6, 6, 6] }
];

const maiorNota = alunos.map(aluno =>{
 return {
    nome : alunos.nome,
    maiorNota: Math.max(...aluno.notas)};
})
console.log(maiorNota)

//Dado o array de movimentações de estoque, onde cada objeto representa uma compra ou venda, calcule o saldo final do estoque.
const movimentacoes = [
  { tipo: "compra", quantidade: 30 },
  { tipo: "venda", quantidade: 10 },
  { tipo: "compra", quantidade: 20 },
  { tipo: "venda", quantidade: 5 }
];

const saldoFinal = movimentacoes.reduce((acc, item) =>{
  return item.tipo === "compra" ? acc + item.quantidade : acc - item.quantidade;
},0)

console.log(saldoFinal)

//Crie uma função que recebe um array de cursos (com nome e cargaHoraria). A função deve retornar uma nova lista com 20% de bônus na carga horária apenas para cursos com mais de 40 horas.
const cursos = [
  { nome: "HTML", cargaHoraria: 30 },
  { nome: "JavaScript", cargaHoraria: 45 },
  { nome: "CSS", cargaHoraria: 50 }
];

function aplicarBonus(cursos) {
  return cursos.map(curso => {
    if (curso.cargaHoraria > 40) {
      return {
        ...curso,
        cargaHoraria: curso.cargaHoraria * 1.2 // bônus de 20%
      };
    } else {
      return curso; // mantém como está
    }
  });
}

const cursosComBonus = aplicarBonus(cursos);
console.log(cursosComBonus);


