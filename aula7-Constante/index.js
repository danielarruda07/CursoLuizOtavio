//Contante É uma variável que não muda seu valor

//Não pode criar Constante com palavras reservardas da linguagem - REGRA
//Precisam ter nomes significativos para identficar oq signifca ou oq se refere a variável - SUGESTÂO
//Não pode começar um nome de uma constante com um número - REGRA
//Não pode conter espaços ou traços
//Caso seja necessário Utilizando CamelCase (começar o palavra com letra maiuscula) - SUGESTÃO
//Variáveis com letras maiuscula e minusculas são entendidas de forma diferente - Case-sensitive - REGRA
//Não podemos modificar o valor de uma Constante - A constante já precisa ser criada e inicializada ao mesmo tempo
//NÃO UTILIZE VAR, UTILIZE CONST

const nome = 'João'
console.log (nome)

//Posso pegar o valor de uma variável ou de uma constante e atriubuir a outra variável ou outra constante
// O que está dentro de aspas é string/texto, e quando fora de aspas é number/número, o motor do java já subentende se é texto ou número

const primeiroNumero = 5 // number
const segundoNumero = '10' // string/texto
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5


console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)

//como saber qual o TIPO de dado
console.log(typeof primeiroNumero)
console.log(typeof segundoNumero)


