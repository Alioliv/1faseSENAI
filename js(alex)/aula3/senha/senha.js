function gerarCaracterAleatorio(){
    const caracteres = "alalalaalalla"
    const numeroAleatorio = math.flor(Math.random() * caracteres.lergt)

    return caracteres.charAt(numeroAleatorio)
}


function Mostrar(){
    let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter - de 1 a 10:"))
    let senha = ""
    while(quantidade > 0){
        senha = senha + gerarCaracterAleatorio()
        quantidade = quantidade - 1
    }
    alert("A senha é: " + senha)
}