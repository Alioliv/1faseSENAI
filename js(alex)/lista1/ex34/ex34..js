/*A máquina só entrega refrigerante se o valor inserido for igual ou maior a 5 reais.
let valor;
Mostre:
"Produto liberado!" ou
"Valor insuficiente."*/

let valor = Number(promt("Digite o valor inserido: "))
if(valor >= 5){
    console.log("Produto liberado!")
}else{
    console.log("Valor insuficiente")
}