/*6. Some os números de 1 a 100, mas pare se a soma passar de 400.*/
 
function ex19(){
    let num = 1
    let soma = 0

    while (num <= 100){
        soma += num
        alert ("A soma dos números de 1 a 100 é: " + soma)
        num++

        if (soma >= 400){
            alert ("A soma ultrapassou 400, o loop será encerrado.")
            break
        }
    }
    
}

/*7. Simule uma senha com 3 tentativas*/

function ex20(){
    let senha = "12345"
    let senhaDigitada = ""
    let tentativas = 0
    let maxTentativas = 3

    while (senhaDigitada != senha && tentativas < maxTentativas){
        senhaDigitada = prompt("Digite a senha: ")
        tentativas++

        if (senhaDigitada == senha){
            alert ("Senha correta!")
        }else{
            alert ("Senha incorreta!")
        }
    }
    
}

/*8. Conte os números de 1 a 50, mas pare se chegar a 30.*/

function ex21(){
     let num = 1
    while (num <= 50){
        alert ("O número é: " + numero)
        num++
        if (num === 30){
            alert ("O número 30 foi encontrado")
            break
        }
    }
}

/*9. Conte até 100, mas exiba uma mensagem especial no 50.*/

function ex22(){
     let num = 0
    while (num <= 100){
        alert ("O número é: " + numero)
        num++
        if (num === 50){
            alert ("O número 50 foi encontrado")
            
        }
    }
}

/*10. Conte de 10 a 0 e diga “Lançamento!” ao final.*/

function ex23(){
    let num = 0 

    while (num > 10) {
        if(num === 10) {
            alert("Lançamento")
        }else{
            alert("O número é: "+ num)
        }
        num ++;
 }
}

/*11. Conte até 30 e diga “Pulando!” para múltiplos de 7*/

function ex24(){
    let num = 0
    while(num <= 30){
        if(num % 7 == 0){
            alert(" ")
        }else{
            alert("Número pulando os multiplos de 7 até 30: " + num)
        }
        num ++;
 }
}

/*12. Conte de 1 a 20 e diga “Especial!” para múltiplos de 2 e 3 ao mesmo tempo.*/
function ex25(){
    let num = 0
    while(num <= 20){
        if(num % 2 == 0 || num % 3 == 0){
            alert("Número especial " + num)
        }else{
            alert("Números : " + num)
        }
        num ++;
 }
}

/*13. Conte de 1 a 10 e diga se o número é menor ou maior que 5.*/

function ex26(){
    let num = 1
    while(num <= 0){
        if(num <=5 ){
            alert("Número menor que 5: " + num)
        }else{
            alert ("Número maior que 5: " + num)
        }
        num ++;
 }
}

