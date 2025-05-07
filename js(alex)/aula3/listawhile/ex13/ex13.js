/*13. Conte até 20 e exiba “Buzz” para múltiplos de 5.*/
function contador(){
    let num = 0

    while(num <= 20){
        if(num % 5 === 0 ){
            alert( "Buzz.. " + num + " É multiplo de 5")
        }
        num ++;
    }
}
