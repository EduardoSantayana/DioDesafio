class Jogador {

    // propriedades privadas
    #vitorias = 0;
    #derrotas = 0;
    #totalDePartidas = 0;
    #rank = 0;
    #elo = "iniciante";

    #calcularTotalPartidas() {
        // método privado, apenas para exibir o valor total de partidas do jogador.
        return this.#vitorias + this.#derrotas;
    }
    #atualizarRank() {
        // método privado, apenas para exibir o valor total de partidas do jogador.

        return this.#rank = this.#vitorias - this.#derrotas;
    }



    constructor(nome) {
        this.nome = nome;
    }

    get vitorias() {

        return this.#vitorias;
    }

    set vitorias(n) {
        if (n >= 0 && n > this.#vitorias) {
            this.#vitorias = n;
            // Tanto o elo quanto o rank são atualizados com base na derrotas e vitórias.
            this.#atualizarRank();
        } else {
            console.error('Modificação negada');
        }
    }

    get derrotas() {
        return this.#derrotas;
    }

    set derrotas(n) {
        if (n >= 0 && n > this.#derrotas) {
            this.#derrotas = n;
            // Tanto o elo quanto o rank são atualizados com base na derrotas e vitórias
            this.#atualizarRank();
        } else {
            console.error('Modificação negada');
        }
    }


    get totalDePartidas() {
        return this.#calcularTotalPartidas();
    }

    get elo() {
        return this.#elo;
    }

    set elo(nome) {
        return this.#elo = nome;
    }

    get rank() {
        return this.#atualizarRank();
    }
}


// Objeto player 
const jogador = new Jogador("DIO");
jogador.rank = 999;





function verificaRank(objPersonagem) {
    // se o objeto é uma instância de Jogador, então a função é aplicada.
    if (objPersonagem instanceof Jogador && objPersonagem.rank) {
        switch (true) {

        case (objPersonagem.rank <= 10):
                return objPersonagem.elo = "Ferro";

        case (objPersonagem.rank >= 11 && objPersonagem.rank <= 20):
        return objPersonagem.elo = "Bronze";

        case (objPersonagem.rank >= 21 && objPersonagem.rank <= 50):
        return objPersonagem.elo = "Prata";

        case (objPersonagem.rank >= 51 && objPersonagem.rank <= 80):
        return objPersonagem.elo = "Ouro";

        case (objPersonagem.rank >= 81 && objPersonagem.rank <= 90):
        return objPersonagem.elo = "Diamante";

        case (objPersonagem.rank >= 91 && objPersonagem.rank <= 1000):
        return objPersonagem.elo = "Lendário";

        case (objPersonagem.rank >= 1001):
        return objPersonagem.elo = "Imortal";
            default:
console.log("Entre em contato com a desenvolvedora para verificar o status do seu personagem")
                break;
        }
    } 
}




/*

function teste() {
    jogador.vitorias = jogador.vitorias + 1;
    verificaRank(jogador)
    console.log( "Elo: " + jogador.elo + " Nome: " +jogador.nome +" Rank: "+jogador.rank);    
}; 


setInterval(teste, 900);

*/

