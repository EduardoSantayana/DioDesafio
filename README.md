# Dio Desafio 
 
## Objetivos 
## Dio Desafio-1 
 
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

## explicação do código
No lugar da palavra XP, utilizei `nível` como uma propriedade do objeto `personagem`. Fiz um teste `if` para verificar se corresponde a um objeto e para verificar se existe a propriedade `nivel`. Utilizei a estrutura `switch` para verificar os valores da propriedade `nível` do objeto `personagem` em cada `case` e altera a propriedade `elo` de acordo com o nível. Como utilizei `return` para alterar a propriedade `elo`, isso encerra a execução da condição e da função, alterando a propriedade elo e dessa maneira, saindo da condição `case` e eliminando a necessidade de usar o `break` para encerrar a condição.

## Desafio-2 Calculadora de partidas Rankeadas
## Objetivos 
** **

**Descrição do desafio:**

Crie uma função que recebe como **parâmetro** a quantidade de **vitórias** e **derrotas** de um **jogador**. Em seguida, retorne o resultado para uma **variável**. O saldo de Rankeadas deve ser calculado através da fórmula: **(vitórias - derrotas)**.

**Condições da função:**

1. Se **n** rank for menor do que 10, o rank é **Ferro**.
2. Se **n** rank estiver entre 11 e 20, o rank é **Bronze**.
3. Se **n** rank estiver entre 21 e 50, o rank é **Prata**.
4. Se **n** rank estiver entre 51 e 80, o rank é **Ouro**.
5. Se **n** rank estiver entre 81 e 90, o rank é **Diamante**.
6. Se **n** rank estiver entre 91 e 100, o rank é **Lendário**.
7. Se **n** rank for maior ou igual a 1001, o rank é **Imortal**.


O que será utilizado:

- Variável
- Operadores
- laços de repetição
- Estruturas de decisões
- Funções

## Explicação do Código

### Definição da Classe Jogador:

A classe `Jogador` representa a instância de um jogador em um jogo. Ela define propriedades privadas para rastrear as estatísticas de vitórias, derrotas, total de partidas, rank e elo. A classe também inclui métodos para calcular e atualizar o rank.

#### Propriedades Privadas

- `#vitorias` (Number): Armazena o número de vitórias do jogador.

- `#derrotas` (Number): Armazena o número de derrotas do jogador.

- `#totalDePartidas` (Number): Método privado que calcula o total de partidas somando as vitórias e derrotas.

- `#rank` (Number): Armazena o rank do jogador, calculado como a diferença entre vitórias e derrotas.


### Propriedades Privadas

- `#elo` (String): Armazena o elo atual do jogador, inicializado como "iniciante". Essa propriedade é modificada externamente com base no valor do rank.

### Métodos Privados

- `#calcularTotalPartidas()`: Método privado que calcula e retorna o total de partidas do jogador somando vitórias e derrotas.

- `#atualizarRank()`: Método privado que atualiza o rank do jogador com base nas vitórias e derrotas e retorna o novo valor do rank.

### Construtor

- `constructor(nome: String)`: Inicializa um objeto jogador com o nome fornecido. As estatísticas iniciais, como vitórias, derrotas, rank e elo, são inicializadas com valores padrão.


### Getters e Setters

- `get vitorias(): Number`
  - Retorna o número de vitórias do jogador.

- `set vitorias(n: Number): void`
  - Define o número de vitórias do jogador, desde que o novo valor seja maior ou igual a zero e maior que o valor atual de vitórias. Atualiza o rank após a modificação.

- `get derrotas(): Number`
  - Retorna o número de derrotas do jogador.

- `set derrotas(n: Number): void`
  - Define o número de derrotas do jogador, desde que o novo valor seja maior ou igual a zero e maior que o valor atual de derrotas. Atualiza o rank após a modificação.

- `get totalDePartidas(): Number`
  - Retorna o total de partidas do jogador, calculado chamando o método privado `#calcularTotalPartidas()`.

- `get elo(): String`
  - Retorna o elo atual do jogador.

- `set elo(nome: String): void`
  - Define o elo do jogador para o valor fornecido.

- `get rank(): Number`
  - Retorna o rank atual do jogador, calculado chamando o método privado `#atualizarRank()`.



# Função `verificaRank`
A função `verificaRank` é responsável por verificar o rank de um objeto do tipo `Jogador` e atribuir um elo com base no rank fornecido.

## Parâmetros

- `objPersonagem`: Um objeto que deve ser uma instância da classe `Jogador` e conter a propriedade `rank`.

## Retorno

A função não retorna um valor diretamente, mas modifica o objeto `objPersonagem` ao atribuir o elo correspondente ao rank. 
Caso o objeto não seja uma instância de `Jogador` ou não possua a propriedade `rank`, a função não realiza nenhuma operação.

## Exemplo de Uso

```javascript
const jogadorExemplo = new Jogador("NomeJogador");
// adiciona valores para exemplo
jogadorExemplo.vitorias = 25;
jogadorExemplo.derrotas = 2;

verificaRank(jogadorExemplo);

console.log(`Elo: ${jogadorExemplo.elo}`);
```
Implementação Futura: Gerenciamento de Vitórias e Derrotas

Para futuras implementações, considere o gerenciamento de vitórias e derrotas. Além disso, dentro da função `verificaRank`, verifique a existência das propriedades `vitorias` e `derrotas` no objeto `Jogador`.

Caso você verifique o código e encontre incorrências ou tenha sugestões, fique à vontade para fazer modificações ou entrar em contato. 



Caso tenha interesse em participar de um bootcamp ou fazer um curso de programação, acesse ou pesquise [Digital Innovation One](https://www.dio.me/en).

```