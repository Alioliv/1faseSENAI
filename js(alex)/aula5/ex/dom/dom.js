/* 1. 4 inputs- notas    resultado-> media*  2. 4 inputs-> notas e 4 pesos
*/

function ex() {
    let nota1 = Number(document.getElementByid("nota1").value)
    let nota2 = Number(document.getElementByid("nota2").value)
    let nota3 = Number(document.getElementByid("nota3").value)
    let nota4 = Number(document.getElementByid("nota4").value)

    let p1 = Number(document.getElementById("p1").value)
    let p2 = Number(document.getElementById("p2").value)
    let p3 = Number(document.getElementById("p3").value)
    let p4 = Number(document.getElementById("p4").value)

    let media = (nota1 * p1 + nota2 * p2 + nota3 * p3 + nota4 * p4) / ( p1 + p2 + p3 + p4); 

    let tagresultado = document.getElementById("resultado");

     tagresultado.innerText = "Sua média é: " + media

}


/* imc 5 inputs nome, idade, sexo, peso, altura.*/


