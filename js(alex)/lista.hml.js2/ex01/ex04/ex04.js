//Horóscopo Interativo
//escrição: Mostra uma previsão aleatória com base no signo do usuário.
//Entradas: Seleção do signo (ex: "Leão").
//Exemplo de Saída: "Hoje é um ótimo dia para buscar novos desafios, Leão!"

function Horóscopo(){
    let signo = prompt("Digite seu signo: ")

    if(signo == áres){
        alert("Uma boa semana para realixar suas metas")
    }else if(signo == leão){
        alert("Hoje é um ótimo dia para buscar novos desafios!")
    }else if(signo == escopião){
        alert("Hoje é um ótimo!")
    }else if(signo == gêmeos){
        alert("um bom ano estar por vir!")
    }else if(signo == Virgem){
        alert("Boas coisas estão prestes a acontecer!")
    }else{
        alert("invalido")
    }
}