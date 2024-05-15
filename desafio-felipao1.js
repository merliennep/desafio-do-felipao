/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

const entrada = require('prompt-sync')({sigint: true})

let nome = entrada("Digite seu nome: ")
let xpHero = entrada("Digite o XP do seu herói: ")
console.log("Meu nome é " + nome +  " e meu herói tem " + xpHero +  " de XP")

if(xpHero <= 1000){
    console.log("Seu herói está no nível Ferro")

}else if(xpHero >= 1001 && xpHero <=2000){
    console.log("Seu herói está no nível Bronze")

}else if(xpHero >= 2001 && xpHero <=5000){
    console.log("Seu herói está no nível Prata")

}else if(xpHero >= 5001 && xpHero <=7000 ){
    console.log("Seu herói está no nível Ouro")

}else if(xpHero >= 7001 && xpHero <=8000 ){
    console.log("Seu herói está no nível Platina")

}else if(xpHero >= 8001 && xpHero <=9000 ){
    console.log("Seu herói está no nível Ascendente")

}else if(xpHero >= 9001 && xpHero <=10000 ){
    console.log("Seu herói está no nível Imortal")
    
}else{
    console.log("Seu herói está no nível Radiante")
}