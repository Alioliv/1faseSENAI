//Calculadora de IMC
//Solicite ao usuário que insira seu peso e altura.
//Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso
// (altura²).
//Exiba o resultado em um alert e classifique o IMC de acordo com os
//valores:
//Menos de 18,5: Abaixo do peso
//Entre 18,5 e 24,9: Peso normal
//Entre 25 e 29,9: Sobrepeso
//30 ou mais: Obesidade

function imc(){
    let peso = Number(prompt("Digite seu peso (kg): "))
    let altura = Number(prompt("Digite sua altura: "))
    let imc = Number(prompt(peso * (altura * altura)))

    if(imc <18,5 ){
        console.log("Abaixo do peso")
    }if(imc >=18,5 && imc <24,9){
        console.log("Peso normal")
    }if(imc >=25 && imc <29,9){
        console.log("Sobrepeso")
    }if(imc >30){
        console.log("Obesidade")
    }
    alert("seu imc: " + imc)
}
