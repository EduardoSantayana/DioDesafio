# Dio Desafio 
 
## Objetivos 

Crie uma variável para armazenar o nome e a quantidade de XP de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

1. Se XP for menor do que 1.000 = Ferro
2. Se XP for entre 1.001 e 2.100 = Bronze
3. Se XP for entre 2.001 e 3.500 = Prata 
4. Se XP for entre 4.000 e 5.000 = Ouro 
5. Se XP for entre 5.001 e 6.000 = Platina 
6. Se XP for entre 6.001 e 7.000 = Diamante
7. Se XP for entre 8.001 e 9.000 = Ascendente
8. Se XP for entre 9.001 e 10.000 = Imortal
9. Se XP for maior ou igual a 10.001 = Radiante 

## explicação do meu código
No lugar da palavra XP, utilizei `nível` como uma propriedade do objeto `personagem`. Fiz um teste `if` para verificar se corresponde a um objeto e para verificar se existe a propriedade `nivel`. Utilizei a estrutura `switch` para verificar os valores da propriedade `nível` do objeto `personagem` em cada `case` e altera a propriedade `elo` de acordo com o nível. Como utilizei `return` para alterar a propriedade `elo`, isso encerra a execução da condição e da função, alterando a propriedade elo e dessa maneira, saindo da condição `case` e eliminando a necessidade de usar o `break` para encerrar a condição.

