//- Conversão de Temperatura (Celsius para Fahrenheit)
//Solicite ao usuário que insira uma temperatura em Celsius.
//Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
//Exiba o resultado em uma mensagem de alert .

function temperatura(){
    let temperatura = (prompt("Digite a temperatura (Celsius): "))
    let tpFahrenheit = Number(prompt(temperatura * 9/5 + 32))
    alert("Resultado da converção pra Fahrenheit: " + tpFahrenheit)
}