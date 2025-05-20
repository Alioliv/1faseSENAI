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
    let num = 0

    while (num <= 50){
        alert ("números de 1 a 50: " + num)
        num ++;
        if (num === 30){
            alert ("Número encontrado: " + num)
            break
        }
    }
}

/*9. Conte até 100, mas exiba uma mensagem especial no 50.*/

function ex22(){
     let num = 0
    while (num <= 100){
        alert ("O número é: " + num)
        num++
        if (num === 50){
            alert ("O número 50 foi encontrado")
            
        }
    }
}

/*10. Conte de 10 a 0 e diga “Lançamento!” ao final.*/

function ex23(){
    let num = 0 
    while (num < 10) {
        alert("O número é: "+ num)
        num++
        if(num === 10) {
            alert("Lançamento"+ num)
        }
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
    while(num <= 10){
        if(num <=5 ){
            alert("Número menor que 5: " + num)
        }else{
            alert ("Número maior que 5: " + num)
        }
        num ++;
 }
}

/*14. Faça um loop que pare ao chegar em um número aleatório entre 1 e 10
(simulado).*/

function ex27(){
    let num = 1
    let numeroAleatorio =  Math.floor(Math.random() * 10) + 1; // número entre 1 e 10
    while (num <= 10) {
        alert("Número: "+ num)
        num++;
        if (num === numeroAleatorio ) {
        alert("numero aleatorio: "+ numeroAleatorio)
        break
    }
    }
}

/*15. Mostre todos os divisores de um número X (por exemplo, 24)*/

function ex28(){
    let numdv = Number(prompt("Digite um número para ver os divisores: "))
    let divisor = 1

    while (divisor <= numdv){
        if (numdv % divisor == 0){
            alert ("O número " + divisor + " é divisor de " + numdv)
        }
        divisor++
    }
}

/*16. Some apenas os números ímpares entre 1 e 20.*/

 function ex29(){
    let num = 1 
    let soma = 0
    while(num <= 20) {
        if (num % 2 != 0){
            soma += num
            alert("soma dos números ímpares entre 1 e 20: "+ num + " resultado:" + soma)
        }
        num ++;
    }
 }

 /*17. Conte os múltiplos de 9 entre 1 e 100*/

 function ex30(){
    let num = 1
    while (num <= 100) {
        if (num % 9 === 0) {
            alert("Número multiplo de 9: "+ num)
        }
        num++; 
    }
 }

 /*18. Conte os números de 50 até 0 que não são múltiplos de 5.*/

 function ex30(){
    let num = 50
    while (num >= 0) {
        if (num % 5 != 0) {
            alert("Número não é multiplo de 5: " + num)
        }
        num--;
    }
 }

 /*19. Calcule a soma dos números pares até 100.*/

 function ex31(){
    let num = 1
    let soma = 0

    while (num <= 100){
        if  (num % 2 === 0){
            soma += num
            alert ("A soma dos números pares de 1 a 100 é: " + soma)
        }else{
            alert ("O número " + num + " é ímpar.")
        }
        num++
    }
 }

 /*20. Simule o funcionamento de um semáforo (verde → amarelo → vermelho).*/

function ex33(){
    let sinaleira = ["Verde", "Amarelo", "Vermelho"]
    let contador = 0
    let tempo = 0

    while (contador < 10){
        alert ("Sinal: " + sinaleira[contador % 3])
        contador++
        tempo += 5
        alert ("Tempo: " + tempo + " segundos")
    }
}
/*1. Simule a carga de uma bateria de 0% a 100% de 10 em 10.*/

function ex34(){
    let bateria = 0

    while (bateria < 100){
        alert ("A bateria está em: " + bateria)
        bateria += 10
        if (bateria == 100){
            alert ("Bateria cheia!")
        }
    }
}
/*2. Simule a descarga de uma bateria de 100% a 0%.*/

function ex35(){
    let bateria = 100

    while (bateria > 0){
        alert ("A bateria está em: " + bateria )
        bateria -= 10
        if (bateria == 0){
            alert ("Bateria descarregada!")
        }
    }
}

/*3. Crie um cronômetro de 0 a 60 segundos (simulado).*/

function ex36(){
    let tempo = 0

    while (tempo <= 60){
        alert ("O tempo, segundos: " + tempo )
        tempo++
        if (tempo == 60){
            alert ("O tempo acabou!")
        }
    }
}

/*4. Simule a contagem de um cofre com 5 tentativas de código.*/

function ex37(){
    let senha = Number(prompt("Digite a senha: "))
    let senhaC = 1234
    let tentativas = 0
    let maxTentativas = 5

    while (senha != senhaC && tentativas < maxTentativas){
        alert ("Senha incorreta! Você tem " + (maxTentativas - tentativas) + " tentativas restantes.")
        senha = Number(prompt("Digite a senha: "))
        tentativas++
        if (senha == senhaC){
            alert ("Senha correta!")
        }
    }
}

/*5. Simule um personagem andando 10 passos com console.log.*/

function ex38(){
    let passos = 0
    let distancia = 10

    while (passos >= distancia){
        console.log ("Você andou " + passos + " passos.")
        passos++
    }
}
/*6. Simule uma barra de carregamento (ex: “█” aumentando).*/

function ex39(){
    let carregamento = "█"
    let porcentagem = 0
    let totalCarregamento = 10
    let totalCarregado = 0

    while (totalCarregado < totalCarregamento){
        alert ("Carregando: " + carregamento.repeat(totalCarregado) + " " + porcentagem + "%")
        porcentagem += 10
        totalCarregado++
        if (totalCarregado == totalCarregamento){
            alert ("Carregamento completo!")
        }
    }
}

function ex40(){
    let gasolina = 100
    let consumo = 10
    let distancia = 0

    while (gasolina > 0){
        alert ("Você tem " + gasolina + " litros de gasolina.")
        distancia += consumo
        gasolina -= consumo
        alert ("Você andou " + distancia + " km.")
        if (gasolina <= 0){
            alert ("Você ficou sem gasolina!")
        }
    }
}

function ex41(){
    let numero = 1

    while (numero <= 100){
        if (numero % 8 == 0){
            alert ("Pula! Multiplo de 8")
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}

function ex42(){
    let numero = 6
    let numeroDeSorte = Math.floor(Math.random() * 6) + 1
    let tentativas = 0

    while (numeroDeSorte == numero){
        if (numero != numeroDeSorte){
            alert ("Role o dado novamente!")
        }else{
            alert ("Você acertou o número 6: " + numeroDeSorte)
        }
        tentativas++
        break
    }
}

function ex43(){
    let numero = 1

    while (numero <= 100){
        if (numero % numero == 0 && numero % 1 == 0 && numero != 1 && numero % 2 != 0 && numero % 3 != 0){
            alert ("O número " + numero + " é primo.")
        }else{
            alert ("O número " + numero + " não é primo.")
        }
        numero++
    }
}

function ex44(){
    let numero = 1
    let soma = 0
    let somaMaxima = 1000
    let quantidade = 0

    while (soma <= somaMaxima){
        alert ("A soma é: " + soma + " e a quantidade de vezes que o número 1 foi somado é: " + quantidade)
        soma += numero
        quantidade++
        if (soma > somaMaxima){
            alert ("A soma ultrapassou 1000, o loop será encerrado.")
            break
        }
    }
}

function ex45(){
    let dowload = 0

    while (dowload < 100){
        dowload += 10
        alert ("Download em progresso: " + dowload + "%")
        if (dowload == 100){
            alert ("Download completo!")
        }
    }
}

function ex46(){
    let tempo = 1
    let tempoMaximo = 5

    while (tempo <= tempoMaximo){
        alert ("O tempo é: " + tempo + " segundos")
        tempo++
        if (tempo == tempoMaximo){
            alert ("O tempo acabou!")
        }
    }
}

function ex47(){
    let senhaDigitada = ""
    let tentativas = 0
    let maxTentativas = 4

    while (tentativas < maxTentativas){
        senhaDigitada = prompt("Digite a senha: ")
        tentativas++
        if (tentativas == maxTentativas){
            alert ("Senha correta!")
        }else{
            alert ("Senha incorreta! Você tem " + (maxTentativas - tentativas) + " tentativas restantes.")
        }
    }
}

function ex48(){
    let numero = 1

    while (numero <= 100){
        if (numero % 3 == 0 && numero % 5 == 0){
            alert ("O número é: " + numero + " FizzBuzz")
        }else if (numero % 3 == 0){
            alert ("O número é: " + numero + " Multiplo de 3")
        }else if (numero % 5 == 0){
            alert ("O número é: " + numero + " Multiplo de 5")
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}