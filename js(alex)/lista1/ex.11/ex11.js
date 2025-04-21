//A entrada no cinema é gratuita para crianças até 12 anos ou idosos acima de 60.
//Desafio:
//let idade
//Exiba:
//"Entrada gratuita 🎟" ou
//"Precisa pagar ingresso 💳"

alert("entrada")
let idade = Number(prompt("Digite sua idade:"))
if(idade <= 12 && idade > 60 ){
    console.log("Entrada gratuita ")
}else{
    console.log("Precisa pagar ingresso 💳")
}