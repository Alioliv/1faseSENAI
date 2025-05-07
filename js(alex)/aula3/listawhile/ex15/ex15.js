/*2. Calcule a multiplicação de 1 a 5 (fatorial de 5).*/

function contador(){
    let numero = 5  
    let contador = 1
    let fatorial = numero

 while(contador < numero){
    fatorial =  fatorial * (numero - contador)
    contador++
}
alert("O fatorial de " + numero + " é: " + fatorial ) 
}