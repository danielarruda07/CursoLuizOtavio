let numero = prompt('Digite Um Número');
numero = Number(numero) // convertendo string em numero
/*
Outra forma seria:
const numero = number(prompt('Digite um Número:));
*/
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero;
texto.innerHTML = ''; //assim estou limpando oq está escrito na div id no html
texto.innerHTML += `<p>Seu Número + 2 é: ${numero + 2}</p>`;
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

