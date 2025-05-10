/*6. Some os números de 1 a 100, mas pare se a soma passar de 400.*/
 
function ex19(){
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

/*7. Simule uma senha com 3 tentativas*/

function ex20(){
    let senha = 1234 
    let tentativas = 3

    while(tentativas <=3 )
    
}