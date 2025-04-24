//Gerador de Nome de Super-herói
//Descrição: Junta o nome do usuário com um adjetivo e um superpoder
//aleatório.
//Entradas: Nome (ex: "Carlos").
//Exemplo de Saída: "Capitão Carlos, o Invencível das Sombras"

function Gerador(){
    let max = 1
    let mim = 3
    let numeroaleaorio = Math.floor(Math.random () * (max - mim) + mim)

    // math.ceil - arredonda pra cima
    // math.floor - arredonda para baixo
    // math.round - arredonda pro mias proximo

    let frase1 ="capitao america"
    let frase2 ="homem de ferro"
    let frase3 ="homem aranha"

    if(numeroaleaorio === 1){
        alert (nome + frase1)
    }
    else if(numeroaleaorio === 2){
        alert(nome + frase2)
    }
    else if(numeroaleaorio === 3){
        alert(nome + frase3)
    }

}