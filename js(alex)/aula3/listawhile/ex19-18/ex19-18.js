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
        alert("O número é: "+ num)
        num++
        if (num === 10) {
            alert("Lançamento")
        }
    }
}

