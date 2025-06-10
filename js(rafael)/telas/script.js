/*let nome, email, senha declarar um por vez*/
// usuario para agrupar todos elementos 
//document.getElementById("inputLogNome").focus()
//mostrarLogin()

// let nomesTeste = [ "usuario 1", "usuaro 2"] // estrutura de dados ("") push alterar 

/*let usuario = {
    nome: "",
    email: "",
    senha: "",
}*/

// Array começa a contar em 0

inicializar()

let usuarios = []

function cadastrar(){
    let usuario ={
      nome : document.getElementById("inputCadNome").value,
      email : document.getElementById("inputCadEmail").value,
      senha : document.getElementById("inputCadSenha").value
    }

    usuarios.push(usuario)
    
    alert("Cadastro com sucesso! :D")
    
    console.log(usuarios)

    limparinput()
    mostrarLogin()
    
}

function logar() {
    let nome = document.getElementById("inputLogNome").value
    let senha = document.getElementById("inputLogSenha").value
    for( let i=0; i<usuarios.length; i++){

        if ((nome === usuarios[i].nome || nome === usuarios.email) && senha === usuarios.senha [i].senha){
           
            alert("login efetuado com sucesso!")
            mostrarProdutos()
            limparinput()
        }else{
            alert("Login não efetuado, sem sucesso!")
        }
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