/*let nome, email, senha declarar um por vez*/
// usuario para agrupar todos elementos 
//document.getElementById("inputLogNome").focus()
//mostrarLogin()

inicializar()

let usuario = {
    nome: "",
    email: "",
    senha: "",
}

function cadastrar(){
    usuario.nome = document.getElementById("inputCadNome").value
    usuario.email = document.getElementById("inputCadEmail").value
    usuario.senha = document.getElementById("inputCadSenha").value
    alert("Cadastro com sucesso! :D")

    console.log("usuario");

    limparImputs()
    mostrarLogin()
    
}

function logar() {
    let nome = document.getElementById("inputLogNome").value
    let senha = document.getElementById("inputLogSenha").value
    
    if ((nome === usuario.nome || nome === usuario.email) && senha === usuario.senha) {
        alert("login efetuado com sucesso!")
        mostrarProdutos()
        limparinput()
    }else{
        alert("Login não efetuado, sem sucesso!")
    }
}


function mostrarLogin(){
    esconderTodos()
    document.getElementById("login").style.display = 'flex'
    document.getElementById("inputLogNome").focus()

}
function mostrarCadastro(){
    esconderTodos()
    document.getElementById("cadastro").style.display = 'flex'
    document.getElementById("inputCadNome").focus()
   
}

function mostrarProdutos(){
    esconderTodos()
    document.getElementById("produtos").style.display = 'flex'
    document.getElementById("navbar").style.display = 'flex' // mostra a nava bar 
   
}

function esconderTodos(){
    document.getElementById("login").style.display = 'none'
    document.getElementById("cadastro").style.display = 'none'
    document.getElementById("produtos").style.display = 'none'
    // esconde pag
}

function limparinput(){
    document.getElementById("inputCadNome").value
    document.getElementById("inputCadEmail").value
    document.getElementById("inputCadSenha").value


    document.getElementById("inputLogNome").value 
    document.getElementById("inputLogSenha").value
}

function inicializar(){
    mostrarLogin()
    
}