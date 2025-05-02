/*Só desbloqueia o celular se o código digitado for exatamente "1234".
let codigoDigitado;
Use if para verificar.*/
 
let codigoDigitado = Number(prompt("Digite a senha: "))
if(codigoDigitado === 1234){
    console.log("Senha valida!")
}else{
    console.log("senha invalida")
}