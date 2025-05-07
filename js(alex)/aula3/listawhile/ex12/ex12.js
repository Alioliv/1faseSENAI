/*12. Conte até 20 e exiba “Fizz” para múltiplos de 3.*/
function contador(){
    let num = 0

    while(num <= 20){
        if(num % 3 === 0 ){
            alert( "fizz.. " + num + " É multiplo de 3")
        }
        num ++;
    }
}
