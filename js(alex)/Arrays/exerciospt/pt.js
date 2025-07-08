//11. Crie um array com 5 nomes e mostre apenas os que têm mais de 4 letras.
let nomes = ["Ana", "Clara", "Alice","Maria", "celine"]
let nomesLetra4 = nomes.filter(nome => nome.length >4 )
console.log (nomesLetra4)


//12. Dobre cada número de um array usando .map(). 

let num =[1,2,3,4,5]
let numDobrados = num.map( n => n + n )
console.log(numDobrados)

//13. Filtre os números pares de um array com .filter().

let num2 =[2,3,4,6,7,8]
let pares = num2.filter(numero => numero % 2 === 0)
console.log(pares)

//14. Some todos os números do array com .reduce()

let num3 = [1,2,3,4,5,6]
let soma = num3.reduce(n => n + n)
console.log(soma)


//15. Encontre o maior número de um array.

let num4 = [5,6,7,8,9]
let maior = num4.reduce((a, b) => a > b ? a : b);
console.log(maior)

//17. Inverta os elementos de um array sem usar .reverse().

let num5 = [1, 2, 3, 4, 5];
let invertido = num5.map((_, i, arr) => arr[arr.length - 1 - i]);
console.log(invertido); 


//18. Junte dois arrays em um só usando .concat() ou spread [...].

let nomes1 = ["Ana", "Clara", "Alice"]
let nomes2 = ["Maria", "celine"]
let juntar = nomes1.concat(nomes2)
console.log(juntar)


//19. Ordene um array de strings em ordem alfabética.

let letras = ["c","d","b","a"]
let ordem = letras.sort()
console.log(ordem)
 

//20. Ordene um array de números do maior para o menor.
let num6 = [7,6,5,4,3]
let ordem2 = num6.sort( )
console.log(ordem2)


//21. Remova valores duplicados de um array.
let num7 = [2, 3, 4, 3, 5, 2];

let semDuplicados = num7.filter((valor, indice, array) => {
  return array.indexOf(valor) === indice;
});

console.log(semDuplicados);


//22. Conte quantas vezes um valor aparece em um array.
let valores2 = ['Ana', 'Ana', 'João', 'João', 'Claudia', 'Maria']
let contador= 0
for(let i=0; i< valores2.length; i++){
    if(valores2[i] == 'Ana'){
       contador++
    }
}
let quantasVezesAparece= valores2.filter(valor=> valor === 'Ana').length
console.log(contador, quantasVezesAparece)



//23. Transforme todos os itens do array em uma única string separada por vírgulas com .join().
let arry2 = [1,2,3,4]
let arry3 = [5,6,7,8]
let juntar2 = arry2.concat(arry3).join(",")
console.log(juntar2)

//24. Substitua todas as ocorrências de "banana" por "maçã" em um array.
let frutas = ["banana","pera","abacate","morango"]
let substituindo = frutas.map(fruta => fruta === "banana" ? "maça" : fruta)
console.log(substituindo)

//25. Encontre o índice de um valor específico com .indexOf().
let arry4 = ["a","b","c"]
let indice = arry4.indexOf("b")
console.log (indice)

//26. Crie um novo array contendo apenas as strings de um array com tipos mistos.
let arry6 = ["Ana", 1 , 2, "bia"]
let apenasStrings = arry6.filter(item => typeof item === "string");
console.log(apenasStrings);


//27. Coloque a primeira letra de cada palavra em maiúscula.
let letra2= frutas.map(palavra => {
 let p = palavra.toUpperCase();
 return p 
})
console.log(letra2)


//27. Coloque a primeira letra de cada palavra em maiúscula.
let palavras2 = ['teste', 'seila', 'qualquer', 'coisa']
let palavrasMaiusculo = palavras2.map((palavra)=> {
    let [primeira, ...restante] = palavra
    console.log(primeira, restante)
    let novaletra = primeira.toUpperCase() 
    return novaletra + restante.join('')
})

//28. Verifique se todos os elementos são números com .every().
let elementos = [3, 4,5,6,7,8]
let saonumeros = elementos.every(elemento => typeof elemento === "number")
console.log(saonumeros)

let frutas2 = ["banana", "pera", "abacaxi"];

//27 
let letra4 = frutas2.map(palavra => {
  let primeiraLetra = palavra[0].toUpperCase(); // Pega a primeira letra e deixa MAIÚSCULA
  let resto = palavra.slice(1);                 // Pega o resto da palavra (sem a primeira letra)
  return primeiraLetra + resto;                 // Junta tudo: "B" + "anana" → "Banana"
});

console.log(letra4);


//29. Verifique se ao menos um número é maior que 100 usando .some().
let arry7 = [1, 2, 3, 4, 5, 120 ,7]
let numMaior = arry7.some(n => n > 100)
console.log(numMaior)

//30. "Achatamento": transforme um array com subarrays em um único array plano (um nível só).
let arraydearray = [34, 434, [342, 3, 656,4], [2, [45,34, [344,343]]]]
let arrays = arraydearray.flat(3)
console.log(arrays)

//31. A partir de uma lista de idades, retorne apenas os adultos (idade ≥ 18).
let idades = [6,7,8,9,19,20,33]
let maiorIdade = idades.filter(n => n >= 18)
console.log(maiorIdade)



// 32. Crie uma função que recebe um array de números e retorna a média.

let notas = [5,6,7,8]
function calcularMedia(array){
    let soma = array.reduce((acumulador, atual)=> acumulador += atual ,0)
    return soma/array.length
}
console.log(calcularMedia(notas))

//33. Faça uma função que recebe um array e o devolve na ordem inversa (sem usar .reverse()).
let arry9 = [2,3,4,5,6,7]
function inversa(arry9) {
  let invertido3 = arry9.map((_, i, arr) => arr[arr.length - 1 - i])
  return invertido3;
}
console.log(inversa(arry9))

//34. Rotacione os elementos de um array uma posição para a direita.



//1. Filtro e transformação com ordenação (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
//maiúsculas e ordenadas.

const palavras4 = ["desenvolvimento", "web", "javascript", "logica", "frontend"];

const novoArray = palavras4
  .filter(palavra => palavra.length > 7)      // 1. Filtra as palavras com mais de 7 letras
  .map(palavra => palavra.toUpperCase())      // 2. Converte para maiúsculas
  .sort();                                    // 3. Ordena em ordem alfabética

console.log(novoArray);


//35. Remova todos os valores falsos do array (false, 0, "", null, undefined, NaN).

const misturado = [0, "JavaScript", false, "", 42, null, "ok", undefined, NaN];

const somenteVerdadeiros = misturado.filter(Boolean);

console.log(somenteVerdadeiros);

//36. Agrupe os itens de um array por tipo (typeof).
let array9 = ["Ana", 2, 3, "clara", "Bia"];

let agrupado = {};

array9.forEach(item => {
  let tipo = typeof item;
  if (!agrupado[tipo]) {
    agrupado[tipo] = [];
  }
  agrupado[tipo].push(item);
});

console.log(agrupado);


// 1 – Filtro, transformação e ordenação
//Crie um novo array com as palavras que tenham mais de 4 letras, convertidas para maiúsculas, e ordenadas em ordem alfabética.

const linguagens = ["html", "javascript", "css", "react", "typescript"];
let novoArray2 = linguagens
.filter(n => n.length > 4)
.map(n => n.toUpperCase())
.sort();

console.log(novoArray2)

// media notas 
const estudantes = [
  { nome: "Lucas", notas: [8, 7, 10] },
  { nome: "Joana", notas: [9, 6, 7] }
];

  
//37. Conte as vogais em cada string de um array.
//38. Gere um array com os 10 primeiros números pares.
//39. Gere um array com os quadrados dos números de 1 a 10.
//40. Compare dois arrays e retorne os elementos que existem em ambos.
//41. Faça um array de objetos com nome e nota, e filtre os aprovados (nota ≥ 7).
//42. Crie uma função que embaralha os elementos de um array.
//43. Verifique se um array está em ordem crescente.
//44. Conte quantas strings têm mais de 5 letras em um array.
//45. Inverta as palavras de cada string de um array.
//46. Crie um array com os dias da semana e exiba apenas os do fim de semana.
//47. Separe os números negativos e positivos de um array.
//48. Crie uma função que retorna o segundo maior número de um array.
//49. Conte quantas vezes cada letra aparece em um array de strings.