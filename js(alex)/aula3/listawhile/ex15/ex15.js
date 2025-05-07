/*2. Calcule a multiplicação de 1 a 5 (fatorial de 5).*/

function contador(){
    let num = 1
    let fatorial = 0
    let resultado
    while(num <=5 ){
        resultado = num * fatorial
        alert ("O fatorial de " + num + " é: " + resultado)
        resultado ++
    }
}