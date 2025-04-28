//Você está testando o comportamento de operadores == e === em uma variável
//string e number.
//Desafio:
//let valor1 = "100";
//let valor2 = 100;
//Compare com == e === , e explique o resultado com console.log() .


let valor1 = 100
let valor2 = 100

comparcaoV1 = valor1 == valor2 // Compara apenas o valor e converte tipos diferentes
comparacaoV2 = valor1 === valor2 // false(Compara valor e tipo)

console.log("O resultado da comparação 1 (==):", comparcaoV1 ,
     "operador == Compara apenas o valor e converte tipos diferentes, não o tipo")
console.log("O resultado da comparação 2 (===):", comparacaoV2 ,
     "operador === comprara valor e tipo, e são diferentes(string e number)") 
