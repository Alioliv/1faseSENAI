//4. Conte de 0 a 50 pulando de 5 em 5.

function contador(){
    let numero = 0; // Começa em 0
    let resultado = ""; // Guarda os números em forma de texto

while (numero <= 50) {
  resultado += numero + "\n"; // Adiciona o número e pula uma linha
  numero += 5; // Soma 5 a cada repetição (pula de 5 em 5)
}

alert("Contagem de 0 a 50 (de 5 em 5):\n\n" + resultado);
}
