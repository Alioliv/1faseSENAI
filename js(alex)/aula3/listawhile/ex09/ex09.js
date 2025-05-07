/*9. Conte de 1 até 15 e mostre se o número é par ou ímpar.*/

function contador(){
    let num = 1

    while(num <= 15){
        if(num % 2 === 0){
            alert("Numero: "+ num + " é par")
        }else{
            alert("Numero: "+ num + " é impar")
        }
        num ++;
    }
}
