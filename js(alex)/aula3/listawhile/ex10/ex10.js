/*Conte até 100 e imprima somente os divisíveis por 4.*/
function contador(){
    let num = 0

    while(num <= 100){
    if(num % 4 === 0){
        alert("Numero: "+ num + " é par")
    }
    num ++;
}
}