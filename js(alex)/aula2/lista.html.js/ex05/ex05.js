//Calcular a média de três notas
//Peça ao usuário para inserir três notas de um aluno.
//Calcule a média das notas e exiba o resultado em um alert .

function media(){
    let num1 = Number(prompt("Digite a primeira nota: "))
    let num2 = Number(prompt("Digite a segunda nota: "))
    let num3 = Number(prompt("Digite a terceira nota: "))

    let media = Number(prompt((num1 + num2 + num3) / 3))
    alert("resultado da media: " + media)
}