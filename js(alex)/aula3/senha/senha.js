function gerarCaracterAleatorio(){
    const caracteres = "alalalaalalla"
    const numeroAleatorio = math.flor(Math.random() * caracteres.lergt)

    return caracteres.charAt(numeroAleatorio)
}


function Mostrar(){
    let quantidae = Number(prompt("Informe quantos caracteres sua senha deve ter - de 1 a 10:"))
    let senha = ""
    while(quantidae > 0){
        senha = senha + gerarCaracterAleatorio()
        quantidae = quantidade - 1
    }
    alert("A senha é: " + senha)
}