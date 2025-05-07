//1. Mostre apenas os números pares de 1 a 20.
//Mostre números pares até 20
//let i = 2; while (i <= 20) { console.log(i); i += 2; }
/*function Mostrar(){
    let num = 2
        while(num >= 20){
        alert("Numeros par", num += 2)
        
} */

    function Mostrar(){
        let numero = 1; // Começa com 1
        let resultado = ""; // Vai guardar os números pares em forma de texto
        
        while (numero <= 20) {
          if (numero % 2 === 0) {
            resultado += numero + "\n"; // Adiciona o número com quebra de linha
          }
          numero++; // Vai para o próximo número
        }
        
        alert("Números pares de 1 a 20:\n\n" + resultado);
    }