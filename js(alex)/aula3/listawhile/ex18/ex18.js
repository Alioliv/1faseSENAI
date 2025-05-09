/*5. Conte de 1 a 30, pulando os múltiplos de 4.*/
 
function contador(){
    let num = 1

    while(num <= 30){
    if(num % 4 === 0){
        alert(" ")
    }else{
        alert("Número: " + num)
    }
    num ++;
}
}