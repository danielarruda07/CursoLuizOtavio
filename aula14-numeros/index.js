let num1 = 10 //number
let num2 = 2.5 // number

console.log(num1 + num2) // Está sendo convertido num1 em string temporariamente
num1 = num1.toString() // Assim estou alterando em definitivo a variável número para uma string
console.log(typeof num1)

//console.log(Mostrando a versão binária de um número)
let num3 = 1500
console.log(num3.toString(2))

//reduzindo numeros decimais (arredondar)
let num4 = 10.542498749649
console.log(num4.toFixed(2)) // 2 casas decimais
console.log(num4.toFixed(4))

//saber se um número é inteiro
console.log (Number.isInteger(num2))

//converte string em numero
let temp = parseInt(num1 + '5')
console.log(temp)


//Mostrando imprecisão 
let nu1 = 0.7
let nu2 = 0.1
let resultado = nu1 + nu2
nu1 = Number(resultado.toFixed(1))
console.log(nu1 + nu2)

