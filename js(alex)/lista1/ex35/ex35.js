/*Se a pontuação for entre 80 e 100, você ganha medalha de ouro.
let pontos;
Use operadores lógicos.*/

let pontos = Number(prompt("Digite sua pontuação: "));

if((pontos >= 80) && (pontos <= 100)){
    console.log("você ganha medalha de ouro")
}else{
    console.log("Ainda não")
}