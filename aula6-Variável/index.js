let nome = 'Daniel'; // Dessa forma estou declarando e inicializando a variável

let teste; // variavel apenas declarada e não inicializada
teste = 'qualquer valor'; //Com isso eu estou inicializando a variavel
console.log(teste)

console.log(nome, 'nasceu em 1984')
console.log('Em 2000', nome, 'conheceu Maria')
console.log(nome, 'casou-se com Maria em 2012')
console.log('Maria teve 1 filho com', nome, 'em 2015')
console.log('O Filho de', teste, 'se chama Eduardo')

/*regras para criar varíveis
Não pode criar varíveis com palavras reservardas da linguagem - REGRA
    Ex: let console
        let if
Precisam ter nomes significativos para identficar oq signifca ou oq se refere a variável - SUGESTÂO
    Ex: let n = 'João'
        console.log ('n')
Não pode começar um nome de uma variável com um número - REGRA
    Ex: let 1teste
Não pode conter espaços ou traços
    Ex: nome-cliente
Caso seja necessário Utilizando CamelCase (começar o palavra com letra maiuscula) - SUGESTÃO
    Ex: nomeCompletoDoCliente
Variáveis com letras maiuscula e minusculas são entendidas de forma diferente - Case-sensitive - REGRA
    Ex: let nomecliente = 'Luiz'
        let nomeCliente = 'Otávio'
Não podemos redeclarar variáveis com let
NÃO UTILIZE VAR, UTILIZE LET
*/
let n = 'João'
console.log(n)

let nomeCompletoDoCliente = "Daniel Arruda"
console.log(nomeCompletoDoCliente)


let nomecliente = 'Luiz'
let nomeCliente = 'Otávio'
console.log(nomecliente, nomeCliente)


