/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

function resultado(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas

        if (saldoRankeadas <10){
            console.log("O herói tem de saldo " + saldoRankeadas + " e está no nível de Ferro")
        }else if (saldoRankeadas >= 11 && saldoRankeadas <=20){
            console.log("O herói tem de saldo " + saldoRankeadas + " e está no nível de Bronze")
        }else if(saldoRankeadas >= 21 && saldoRankeadas <=50){
            console.log("O herói tem de saldo " + saldoRankeadas + " e está no nível de Prata")
        }else if(saldoRankeadas >= 51 && saldoRankeadas <=80){
            console.log("O herói tem de saldo " + saldoRankeadas + " e está no nível de Ouro")
        }else if(saldoRankeadas >= 81 && saldoRankeadas <=90){
            console.log("O herói tem de saldo " + saldoRankeadas + " e está no nível de Diamante")
        }else if(saldoRankeadas >= 91 && saldoRankeadas <=100){
            console.log("O herói tem de saldo " + saldoRankeadas + " e está no nível de Lendário")
        }else{
            console.log("O herói tem de saldo " + saldoRankeadas + " e está no nível de Imortal")
        }
}

resultado(15,10)
resultado(25,10)
resultado(35,10)
resultado(65,10)
resultado(95,10)
resultado(105,10)
resultado(115,10)