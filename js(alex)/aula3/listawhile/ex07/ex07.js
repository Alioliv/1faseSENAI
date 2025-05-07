/*7. Conte de 1 até 10 e mostre o quadrado de cada número.*/
function contador(){
    let numero = 1
    let quadrado

    while (numero <= 10){
        quadrado = numero * numero
        alert ("O número: " + numero + " seu quadrado é: " + quadrado)
        numero++
    }
}