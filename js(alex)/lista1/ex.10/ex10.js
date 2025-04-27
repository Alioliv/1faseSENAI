//Você precisa verificar se um jogador venceu. Se a pontuação for maior ou igual a
//100, ele vence.
//Desafio:
//let pontos;
//Exiba:
//"Você venceu! 🏆" ou
//"Continue jogando! 🎮"

alert("jogo!")
let pontos = Number(prompt("Digite o total de pontos: "))
if(pontos => "100"){
    console.log("Você venceu! 🏆")
}
else if(pontos < "100"){
    console.log("Continue jogando!")
}