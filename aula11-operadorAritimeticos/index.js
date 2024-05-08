/**
 * Aritiméticos
 * + Adição / Concatenação
 * ** (dois asterisco), ele faz a potenciação
 * % Resto da divisão
 * A ordem como os cáculos são feitos: 1º parêntese, 2º potenciação, 3º multiplicação, Divisão e o módulo da divisão (%), por ultimo + e -
 * 
 * 
 */
//Exemplo de soma
const num1 = 5
const num2 = 10
console.log (num1 + num2)

//Exemplo de Concatenação
const num3 = '5'
const num4 = 10
console.log (num3+num4)

console.log (num1 ** num2) // 5 elevado a 10

//Exemplo utilizando %, onde mostra o resto da divisão, quando a divisão for inteiro o resultado será 0
const num5 = 10
const num6 = 3
console.log (num5 % num6)

//Exemplo com varios número e utilizando parêntese para que tenha prioripade no calculoa
console.log((num3 + num1) * num5)

//exemplo para incrementar a variáveis com operador de incremento ++, só incrementa 1 em 1
let contador = 1
contador++
contador++
++contador
console.log(contador)

//exemplo de decremento usando o --
let contador01 = 10
--contador01
--contador01
console.log(contador01)


//nesse caso estou fazendo o incremento de um valor específico
const passo = 5
let contador02 = 1
contador02 = contador02 + passo
console.log (contador02)
contador02 = contador02 + passo
console.log (contador02)
contador02 = contador02 + passo
console.log (contador02)

// Operador de atribuição, pode ser usado qualquer operador, soma, subtração
let contador03 = 2
contador03 *=2
contador03 *=2
contador03 *=2
contador03 *=2
contador03 *=2
console.log(contador03)


s