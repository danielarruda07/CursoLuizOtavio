/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu imc é de 25.997979789
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80
let imc; //peso / (altura * altura)
let anoNascimento

imc = (peso / (alturaEmM * alturaEmM))
console.log(imc)
anoNascimento = 2024 - idade
console.log(idade)
console.log('')

//Dessa forma existe o problema de espaços
console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNascimento,'.')
console.log('')

//Dessa forma utilizando o '+', irá concatenar
console.log(nome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg')
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc)
console.log(nome + ' nasceu em ' + anoNascimento +'.')
console.log('')

console.log('Utilizando template string')
console.log(`${nome} tem ${idade} anos pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`) // exemplo
console.log(`${nome} nasceu em ${anoNascimento}.`)