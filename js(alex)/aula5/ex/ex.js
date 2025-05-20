/*aula*/

function cadastro() {
    let nome = document.getElementById("name").value
    let idade = document.getElementById("age").value
    let tagresultado = document.getElementById("resultado")

    tagresultado.innerText ="Bem vindo ao nosso site, " + nome  + "voce tem" + idade + "anos" + "É um prazer ter voce aqui "
}