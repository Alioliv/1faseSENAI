/*Se o tempo do corredor for menor que 10 segundos, ele ganha.
let tempoCorrida;
Exiba:
"Você venceu! 🏁" ou
"Tente novamente."*/

let tempoCorrida = Number(prompt("Digite o tempo corrido: "))
if( tempoCorrida <= 10){
    console.log("Voce venceu")
}else{
    console.log("Tente novamente")
}