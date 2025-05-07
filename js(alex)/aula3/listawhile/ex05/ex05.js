/*5. Conte de 100 até 0 diminuindo de 10 em 10.*/

function contador(){
  let numero = 100; // Começa em 100
  let resultado = ""; // Guarda os números em forma de texto

while (numero >= 0) {
resultado += numero + "\n"; // Adiciona o número e pula uma linha
numero -=10 // Soma a cada repetição
}

alert("Contagem de 100 a 0 (de 10 em 10):\n\n" + resultado);
}
