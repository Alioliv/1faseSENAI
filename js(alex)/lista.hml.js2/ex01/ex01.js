//Decodificador de Mensagem
//Descrição: Substitui as vogais de uma frase por símbolos.
//Entradas: Texto simples (ex: "olá mundo").
//Exemplo de Saída: "ol@ m*nd#"

function DecodificadorMensagem(){
    let frase = prompt("Digite uma frase para codificar:")


let novaFrase = ""
let i = 0


while (i < frase.length) {
    let letra = frase[i];

   
    if (letra === "a" || letra === "A") {
        novaFrase = novaFrase + "@";
    } else if (letra === "e" || letra === "E") {
        novaFrase = novaFrase + "#";
    } else if (letra === "i" || letra === "I") {
        novaFrase = novaFrase + "!";
    } else if (letra === "o" || letra === "O") {
        novaFrase = novaFrase + "$";
    } else if (letra === "u" || letra === "U") {
        novaFrase = novaFrase + "*";
    } else {
        
        novaFrase = novaFrase + letra;
    }

    i = i + 1
}
alert("Frase codificada: " + novaFrase)
}