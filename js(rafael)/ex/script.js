function mostrarLogin(){
    document.getElementById('login').style.display = 'flex'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'

}
function mostrarCadastro(){
    esconderTodos()
    document.getElementById('cadastro').style.display = 'flex'
   
}

function mostrarProdutos(){
    esconderTodos()
    document.getElementById('cadastro').style.display = 'flex'
   
}

function esconderTodos(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
    // esconde pag
}