/*Se o personagem estiver com vida menor que 50, ele pode usar um cogumelo.
let vida;
Verifique e exiba:
"Usando cogumelo 🍄" ou
"Não é necessário ainda."*/

let vida = Number(promt("Digite quantas vidas restantes:"))
if(vida <=50){
    console.log("Usando cogumelo 🍄")
}else{
    console.log("Não é necessário ainda")
}