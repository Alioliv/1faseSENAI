/*Conte de 1 até 10 e mostre o cubo de cada número.*/
function contador(){
    let numero = 1
    let cubo

    while (numero <= 10){
        cubo = numero * numero * numero
        alert ("O número: " + numero + " seu cubo é: " + cubo)
        numero++
    }
}