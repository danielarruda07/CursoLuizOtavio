
console.log('arredonda para o mais próximo')
let num5 = 5.7674
let num6 = Math.round(num5)
console.log(num6) 

console.log('busca o maior e o menor numero de uma sequencia')
console.log(Math.max(2,5,6,8,45,-10,41,2,5,6,8,98))
console.log(Math.min(2,5,6,8,45,-10,41,2,5,6,8,98))



console.log('gera numero aleatorio entre 0 e 1')

console.log(Math.random())

console.log('gera numero aleatorio entre 0 e 5')
const aleatorio = Math.random() * (10 - 5) + 5
console.log(aleatorio)

console.log('gera numero aleatorio entre 0 e 5 com apenas 2 casas decimais')
const aleatorio1 = Math.round(Math.random() * (10000 - 5))
console.log(aleatorio1)

