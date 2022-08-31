//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log (frase)

const novaFrase = frase 

.replace("verde", "rosa ")
.replace ("azul", "laranja")
.replace ("mas não deixe o gato sair", "MAS NAO DEIXE O GATO SAIR")

console.log(

    novaFrase,
    novaFrase.includes("verde"),
    novaFrase.includes("laranja")


);