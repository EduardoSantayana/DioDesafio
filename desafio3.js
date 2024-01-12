class Personagem {
    // propriedade privada
    #equipamento = '';

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;

        // Conjunto de valores permitidos para a propriedade tipo
        const tiposPermitidos = new Set(['guerreiro', 'mago', "monge", 'ninja',]);

        // Verifica se o tipo está no conjunto de valores permitidos
        if (tiposPermitidos.has(tipo)) {
            // inicia a propriedade do objeto
            this._tipo = tipo;
            // define o equipamento com a chamada do método
            this.#definirEquipamento();

            // após escolhemos o tipo, se ele é válido então uma instância foi criada.
            // Assim, bloqueamos a capacidade dessa instância de fazer modificações em si mesma

            Object.freeze(this);
      Object.freeze(this.#equipamento);
        } else {
            throw new Error(`Tipo de herói: ${tipo} não é permitido. Escolha entre: Mago, Guerreiro`);
        }
    }


    // set e get

    get tipo() {
        return this._tipo;
    }

    get equipamento() {
        return this.#equipamento;
    }


    // métodos 
    atacar() {
        return console.log(` \n ****** \n O ${this._tipo} ${this.nome} atacou usando ${this.obterEquipamento()}. \n ****** \n`);
    }

    informacao(){

        const info = {};
        for (const propriedade in this) {
          info[propriedade] = this[propriedade];
        }
        info['equipamento'] = this.#equipamento;
        return console.log(info); 
      }

        

    obterEquipamento() {
        return this.#equipamento;
    }
    // método privado 
    #definirEquipamento() {

        // propriedade privada que depende da escolha do tipo
        switch (this._tipo) {
            // para cada tipo, um equipamento exclusivo
            case 'ninja':
                this.#equipamento = 'Katana e Shuriken';
                break;
            case 'mago':
                this.#equipamento = 'Magia';
                break;
            case 'guerreiro':
                this.#equipamento = 'Espada e escudo';
                break;

            case 'monge':
                this.#equipamento = 'soco do dragão - arte marcial';
                break;

            default:
                console.warn('Tipo de personagem desconhecido.');
        }

    }



}




// lista de testes manuais
// personagem tipo guerreiro 
const reiArthur = new Personagem("Rei Arthur I", 30, "guerreiro");
// tenta fazer uma atribuição, elas são descartadas.
reiArthur.equipamento = "Espada do Destino" ;
reiArthur.nome = "Rei Imortal" ;

// chamada dos métodos
reiArthur.informacao()
reiArthur.atacar();


const personagemNinja = new Personagem('Hattori', 25, 'ninja');
// exibir as propriedades do personagem 
personagemNinja.informacao()
personagemNinja.atacar()

const monge = new Personagem("Zen Li", 100, "monge")
monge.informacao()
monge.atacar()

const MagoSombrio = new Personagem("Dark", 30, "mago")
MagoSombrio.informacao()
MagoSombrio.atacar()


// O exemplo abaixo causa erro pois tem tipo inválido
// const elfo = new Personagem("Elfo", 100, "elfo")
