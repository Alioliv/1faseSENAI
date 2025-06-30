let nomes = [ "ana", "clara","alice","beatriz", "maria","mia"]
console.log(nomes[10])
console.log(nomes.length)
nomes.forEach((element, index) =>
    {
        console.log(element + "@aaaaa.com")
    }
);

nomesComSobrenome = nomes.map((nome) =>{
    return nome + " da silva"
})

let nomesfiltrados = nomes.filter((nome) => nome.length > 5)
let findNome = nomes.find((nome) => nome.length > 5)
console.log(findNome)
