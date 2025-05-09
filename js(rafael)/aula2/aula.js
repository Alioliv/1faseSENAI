/*6. Some os números de 1 a 100, mas pare se a soma passar de 400.*/
// gerar a contagem até 100
//vsomar os numeros
// para se der ruim
// mostarr o resltado

function somar(){
    let soma = 0
    let cont = 1 // iniciação da variavel de controle 
    
    while(cont <= 100 && soma <= 400){ // setar a condição de repetição
        soma = soma + cont
        console.log("cont: " + cont);
        console.log("cont: " + soma);
        console.log("==================");
        cont ++ // modificação de  contagem 
        
    }
    console.log("soma: " + soma);
    

}
