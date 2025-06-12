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
    limparInputs()
    mostrarLogin()
    
    alert("Cadastro com sucesso! :D")
    
    console.log(usuarios)
 
}

function logar() {
    let nomeMail= document.getElementById("inpLogNome").value
    let senha = document.getElementById("inpLogSenha").value

    for( let i=0; i<usuarios.length; i++){

        if ((nomeMail === usuarios[i].nome || nomeMail === usuarios[i].email) && senha === usuarios.senha [i].senha){
           
            alert("login efetuado com sucesso!" + usuarios[i].nome)
            mostrarProdutos()
            limparInputs()

             // document.getElementById('navbar').style.display = 'block'
        }
        //else{
        //   alert("Login não efetuado, sem sucesso!")
        //}
    }
    
}


function mostrarLogin(){
    esconderTodos()
    document.getElementById("login").style.display = 'flex'
    document.getElementById("inpLogNome").focus()

}
function mostrarCadastro(){
    esconderTodos()
    document.getElementById("cadastro").style.display = 'flex'
    document.getElementById("inpCadNome").focus()
   
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

function limparInputs(){
    document.getElementById("inpCadNome").value = ' '
    document.getElementById("inpCadEmail").value = ' '
    document.getElementById("inpCadSenha").value = ' '

    document.getElementById("inpLogNome").value = ' '
    document.getElementById("inpLogSenha").value = ' '
}

function inicializar(){
    mostrarLogin()
    
}