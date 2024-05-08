
let varA = 'A' // B
let varB = "B" // C
let varC = 'C' // A
console.log (varA, varB, varC)

//Preciso que o A=B, B=C, C=A

/* Assim não certo
let varA = varB // = B - Aqui eu já perdi o valor de A
let varB = varC // = C
let varC = varA // = A - 
*/

//Maneira Correta - Antiga
const varATemp = varA //Foi criado uma variável temporária
varA = varB
varB = varC
varC = varATemp


//Maneira Correta - Atual sem precisar criar uma nova variável
[varA, varB, varC = [1,2,3]]

