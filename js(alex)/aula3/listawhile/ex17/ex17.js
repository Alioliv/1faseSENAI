/*4. Conte quantos múltiplos de 6 existem até 100.*/
function contador(){
    let num = 0

    while(num <= 100){
        if(num % 6 === 0 ){
            alert( "Número: " + num + " É multiplo de 6")
        }
        num ++;
    }
}
