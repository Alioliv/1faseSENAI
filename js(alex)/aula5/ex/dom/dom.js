/* 1. 4 inputs- notas    resultado-> media*  2. 4 inputs-> notas e 4 pesos
*/

function ex() {
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let nota3 = document.getElementById("nota3").value
    let nota4 = document.getElementById("nota4").value
    let resultado = document.getElementById("resultado")

    resultado = (nota1 + nota2 + nota3 + nota4) / 4
    resultado.innerText = "Sua media é : " + resultado 


}