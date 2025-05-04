/*Mostre apenas os números ímpares de 1 a 20*/
function impares(){
    let num = 1; 
    let resultado = ""; // Vai guardar os números impares em forma de texto
        
    while (num <= 20) {
      if (num % 2 !== 0) {
        resultado += num + "\n"; // quebra de linha
      }
      num++; // Vai para o próximo número
    }
    
    alert("Números impares de 1 a 20:\n\n" + resultado);
}