//1. Crie um array com 6 cores e exiba apenas as que começam com a letra "A".
const cores = ["rosa", "roxo", "azul", "cinza"]
const coresA = cores.filter(cor => cor.toLowerCase().startsWith("a"));//verifica se uma palavra (string) começa com um determinado caractere ou grupo de caracteres. retorna true ou false

console.log(coresA);

//2. Dado um array de números, multiplique todos os valores por 3 usando .map().
const num =[ 1,2,3,4,5]
const multiplicando = num.map(n => n * 3)

console.log(multiplicando)

//3. Filtre os nomes de um array que começam com a letra "M".
const nomes =["ana","julia","clara","maria"]
const nomesM = nomes.filter(nome => nome.toLocaleLowerCase().startsWith('m'))
console.log(nomesM)


//4. Usando .reduce(), calcule a multiplicação de todos os números de um array.
const mul = [3,4,5,6,7]
const mult = mul.map(n => n * n);
const total = mult.reduce((acc, m)=> acc + m ,0)

console.log(total)

//5. Verifique qual é o segundo menor número de um array.
const arry = [2,3,4,5,6]  
// 1. Cria uma cópia do array
// 2. Ordena do menor para o maior
// 3. Pega o segundo item (índice 1)
const segundoMenor = [...arry].sort((a, b) => a - b)[1];

console.log(segundoMenor);

//6. Crie uma função que retorna apenas os elementos ímpares de um array.
const arry2 =[1,2,3,4,5,6]
const impares = arry2.filter(valor => valor % 2 !== 0)

console.log(impares)

//7. Inverta a ordem das palavras em cada string de um array.
const palavras = ["um","dois","tres"]

//8. Crie um novo array removendo todas as strings vazias ("") de outro array.
const arry3 =[" ", "ola", " ", "oi"]

//9. A partir de dois arrays, retorne os elementos que estão somente no primeiro (diferença).
const arry4 =[1,2,3,4,5]
const arry6 =[2,3,4]

//10. Em um array de números, encontre a soma dos números maiores que 50.
const arryNum = [5,6,7,60,70,80]

//11. Crie um array com 10 nomes e retorne apenas os nomes com exatamente 5 letras.
const arryNomes =["Alice","Clara", "Ana", "Julia"]

//. Agrupe os valores de um array de números por “par” e “ímpar”.
const num2 =[2,3,4,5,6,7]

//13. Verifique se todos os nomes de um array começam com letra maiúscula.


//14. Calcule quantas palavras existem em todas as strings de um array.

//15. Transforme um array de strings em camelCase.

//16. Substitua os números negativos de um array por zero.

//17. Embaralhe as letras de cada string em um array.

//18. Faça uma função que retorne true se dois arrays forem iguais (mesmos valores e ordem).

//19. Crie uma função que retorne quantas palavras terminam com a letra “o” em um array.

//20. Crie um array de 10 objetos com {produto, preco} e filtre os produtos acima de R$50.