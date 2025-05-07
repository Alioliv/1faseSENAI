/*6. Conte de 0 até 30 e mostre apenas os múltiplos de 3.*/

function contador(){
  let num = 0; 
  let resultado = ""; // Vai guardar os números 
      
  while (num <= 30) {
    if (num % 3 === 0) {
      resultado += num + "\n"; // quebra de linha
    }
    num++; // Vai para o próximo número
  }
  
  alert("Números multiplos de 3 até 30:\n\n" + resultado);
}