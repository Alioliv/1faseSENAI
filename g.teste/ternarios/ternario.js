//Peça um número e diga se é par ou ímpar usando ternário.

function ex01() {
    let num = Number(prompt("Digite um número: "))
    let resultado = num % 2 === 0 ? "par": "impar"

    alert(resultado)
}

//Se a nota for: Maior ou igual a 7 → "Aprovado" Menor que 7 → "Reprovado"

function ex02() {
    let nota = Number(prompt("Digite sua nota: "))

    let media = nota >= 7 ? "Aprovado" : "Reprovado"

    alert(media)
    
}
//Com base na quantidade em estoque, exiba: "Disponível" se for maior que 0 "Indisponível" se for igual a 0

function ex03() {
    let estoque = Number(prompt("Digite a quamtidade de produtos no estoque?"))

    let totalDisponivel = estoque >= 1 ? "Disponivel" : "indisponível"
    alert(totalDisponivel)
    
}

//Mostre a classificação com base na média: >= 7 → "Aprovado" >= 5 e < 7 → "Recuperação" < 5 → "Reprovado"

function ex04() {
    let nota = Number(prompt("Digite sua nota"))

    let media = nota >= 7 ? "aprovado": nota >= 5 &&  nota <= 6  ? "recuperacao": "Reprovado"

    alert(media)
} 


//Dada uma variável temperatura, exiba: "Está quente" se for maior que 30°C "Temperatura agradável" se for entre 20°C e 30°C "Está frio" se for menor que 20°C

function ex05() {
    let temperatura = Number(prompt("Digite a temperatura:"))
     
    let temperaturaAtual = temperatura >= 30 ? "Agradável" : temperatura >=20 && temperatura < 30 ? "Temperatura agradavel": "esta frio"

    alert(temperaturaAtual)
}

//Se o cliente for VIP, aplique 20% de desconto. Caso contrário, 10%.

function ex06() {
    let cliente = prompt("Digite se é cliente vip ou não: ")

    let clienteTipo = cliente == "vip" ? "desconto de 20% " : "desconto de 10%"

    alert(clienteTipo)
}