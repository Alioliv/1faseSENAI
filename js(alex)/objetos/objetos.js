const usuario ={
   nome : "Ana",
   idade : 18
}

const endereco = "floripa"
localStorage.setItem("endereço", endereco)
localStorage.setItem("usuario", JSON.stringify(usuario))

const usuariolocalStorage = JSON.parse(localStorage.getItem("usuario"))
console.log(usuariolocalStorage.nome)

// exemplo real 

function cadastrar(){
    let nome = document.getElementById("nome")
    let idade = document.getElementById("idade")
    let usuario = localStorage.getItem("usuario")
    if (usuario) {
        let
    }

}
