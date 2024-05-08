let stringQualquer = 'Um texto' // posso usar aspas simples dentro de aspas dulpa e vice-versa
console.log(stringQualquer)

//strings são indexáveis/indexadas

console.log(stringQualquer[4]) // com esse comando eu consigo saber especificamente qual o caracter/elemento na posição 4

console.log(stringQualquer.charAt(5))


let umastring = "Um texto"
console.log(umastring.concat(' ', 'em')) // mesma coisa de usar o sinal de +, mas o ideal é usar a template string
console.log(`${umastring} em um lindo dia`)

console.log(umastring.replace('Um', 'Outra')) // assim estou substituindo Um, por Outra


let novastring = 'O rato roeu a roupa do rei de roma'
console.log (novastring)
console.log (novastring.replace(/r/g, '#')) // com a flag g irá ser substituido todas as letras r, sem a flag ele só subtirui o 1º r

//saber o tamanho da string 
console.log(novastring.length)

//divida a expressão retirando os espaços
console.log(novastring.split(' '))
console.log(novastring.split(' ', 3)) //limitando a fazer isso apenas 3 vezes

//Transormar tudo em Maisculo
console.log(novastring.toLocaleUpperCase())

//Transormar tudo em Minusculo
console.log(novastring.toLowerCase())







