function somar(){

}

function diminuir(){
    
}

function calcularEcoMoedas(){
    let brinquedos, moedas

    brinquedos = Numbe(prompt("Quantos brinquedos voce trouxe? "))
    if(brinquedos >=0 && brinquedos <=3){
        moedas = brinquedos
    }else{
        if(brinquedos > 3 ){
          moedas = 3  
        }else{
            moedas = 0
        }
    }
      alert("moedas recibidas" + moedas)  
}






