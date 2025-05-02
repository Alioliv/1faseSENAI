/*A pessoa só vai à praia se for final de semana e o tempo estiver ensolarado.
let ehFinalDeSemana;
let tempo;
Exiba:
"Bora pra praia!" ou
"Melhor ficar em casa."*/

let ehFinalDeSemana = (prompt("Digite se é final de semana: "))
let tempo = (prompt("Digite como esta o tempo: "))
if( ehFinalDeSemana == "sim" && tempo == "ensolarado"){
    console.log("Bora pra praia!")
}else{
    console.groupCollapsed("Melhor fivar em casa!")
}