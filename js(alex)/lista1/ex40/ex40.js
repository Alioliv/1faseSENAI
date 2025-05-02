/*Se o jogador acertar a sequência correta, mostre ""Você venceu a memória!""
let resposta;
let respostaCerta = "azul, verde, vermelho";
Compare as strings.*/

let resposta = prompt("Digite a sequencia correta: ")
let respostaCerta =  "azul, verde, vermelho"
if(resposta === respostaCerta == "azul, verde, vermelho"){
    console.log("Você venceu a memória!")
}else{
    console.log("tente de novo!")
}