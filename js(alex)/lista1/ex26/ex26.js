/*Se o mês e o dia forem os do seu aniversário, mostre uma mensagem especial.
let dia;
let mes;
Compare com seu aniversário fictício.*/

let dia = Number(prompt("Digite o dia: "))
let mes = Number(prompt("Digite o mes: "))

// dia 7 do mes 4
if(dia = 7 && mes === 4){
    console.log("Parabens é seu aniversário")
}else{
    console.log("Não é seu aniversário")
}