//Se a criança for do ensino fundamental, precisa levar lápis. Se for do médio, leva
//caneta. Se for outro, leva ambos!
//Desafio:
//let tipoEnsino = "fundamental";
//Use if/else para mostrar o material adequado.

let tipoEnsino = (prompt("Digite o tipo de Ensino: "))

if(tipoEnsino == "fundamental"){
    console.log("levar lápis")
}else if(tipoEnsino == "Médio"){
    console.log("levar caneta")
}
else{
    console.log("levar lápis e caneta!")
}