/*Um robô-sabonete libera espuma apenas se for usado com água
e sabão.
let temAgua;
let temSabao;
Exiba:
"Espuma ativada! 🫧" ou
"Nada acontece."*/

let temAgua = prompt("Digite se tem agua: ")
let temSabao = prompt("Digite se tem sabão: ")
if(temAgua == "sim" && temSabao == "sim"){
    console.log("Espuma ativada! 🫧")
}else{
    console.timeLog("Nada acontece")
}
