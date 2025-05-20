/*1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
dirigir" se for maior de 18 e tiver carteira.*/


/*let idade = Number(prompt("Digite sua idade: "))
    let carteira =  prompt("Digite se tem carteira: ")
    while (idade >= 18) {
       alert("") 
    }
    for (let idade = 0; idade <= 18 .length; idade++) {
        const element = array[idade];
        
    }*/
function ex01(){
    let  idade = 0
    let teach = false 

    while (idade <= 18 || !teach ) { // ponto ! antes retorna como o inverso entao se for false vai se tornar true
        idade = Number(prompt("Digite sua idade: "))
        teach = prompt("tem cnh? sem ou nao") == "sim" ? true : false
        if (idade >= 18 && teach) {alert("voce pode dirigir")
        }else{alert("ainda nao pode digirir ")
    }
    }
}

/*2. Verifique se um número digitado é positivo e par*/ 

function ex02() {
    let num = Number(prompt("Digite um número: ")) 
    if (num >= 1 && num % 2 === 0) {
        alert(" Numero é positivo e par: " + num)
    }else{
        alert("esse nao é positivo ou par ")
    }
    }



/*3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
nome for "admin" ou a senha for "1234".*/ 

function ex03(){
    let user = prompt("Digite a o usúario: ")
    let senha = prompt("Digite a senha: ")

    if (user == "adim" && senha === 1234){
        alert("acesso permitido")
    }else{
        alert ("acesso negado")
    }
    }
    
/*4. Peça dois números. Exiba "Valores válidos" se um for positivo e o outro for
negativo.*/

function ex04(){
    let num1 = Number(promt("Digite o primero número: "))
    let num2 = Number(promt("Digite o segundo numero: "))
    if (num1 >= 1 && num2 <= 0){
        alert("Valores vadilos")
    }else{
        alert("Valores errados")
    }

}

/*5. Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor ou igual a
10.*/

function ex06(){
    let nota = Number(promt('Digite sua nota'))

    if (nota >= 6) {
        alert("aprovado")
    }else if (nota <= 5) {
        alert("Reprovado")
    }
}



