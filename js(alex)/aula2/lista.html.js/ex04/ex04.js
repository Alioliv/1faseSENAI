//Verificar se um número é par ou ímpar
//Solicite ao usuário que insira um número.
//Verifique se o número é par ou ímpar e exiba uma mensagem
//correspondente usando alert .

function vereficar(){
    let num1 = Number(prompt("Digite um numero: "))
    let num = num1 / 2
    if(num % 2 === 0 ){
        alert("Numero par")
    }else if(num % 2 !== 0)
        alert("Numero impar")
    }
