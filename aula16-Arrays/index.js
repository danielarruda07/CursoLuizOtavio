// As strings são indexados por caracteres
const alunos = ['Luiz', 'Maria', 'João']; // Posso colocar qualquer coisa (numero, string, booleans e funcções) O ideal é usar arrays com um só tipo de dado.
//                 0       1        2
console.log('');
const alunos2 = 'DANIEL ARRUDA'
//Os arrays são indexados por elementos
console.log('');

console.log('** Exemplo de acesso a indice de um elemento em um Array **')
console.log(alunos[2]) // Será Luiz
console.log('');

console.log('** Exemplo de acesso a indice de um elemento em uma string **')
console.log(alunos2[3]) 
console.log('');

console.log('** Alterar elemento em determinado indece **')
alunos [0] = 'daniel'
console.log (alunos)
console.log (alunos [0])
console.log('');

console.log('** acrescentar elemento ao array **')
alunos [2] = 'gleiza'
console.log(alunos)
console.log('');

console.log('** O problema é trabalhar dessa forma com um array muito grande **')
console.log(alunos.length) // saber quantos elemntos existem do nosso array
console.log('');

console.log('Forma correta para acrescentar um elemento no final no array')
alunos.push('arthur')
alunos.push('leticia')
console.log(alunos)
console.log('');

console.log('** Forma correta para acrescentar um elemento no inicio no array **')
alunos.unshift('Dudu')
console.log(alunos)
console.log('');

console.log('** Forma correta para remover um elemento no final do array **')




