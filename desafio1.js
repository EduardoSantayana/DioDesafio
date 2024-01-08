// Usei um objeto no lugar de variáveis para organizar as propriedades do personagem. 
const personagemDio = { nome: "Dio", nivel: 1000, elo: "Iniciante" };


function nivel(personagem) {
  // caso queira subir o nivel do personagem para cada chamada da função;
    // personagem.nivel += 1000;
    // se o personagem é um objeto
    if (typeof personagem == "object" && personagem.nivel) {

        // Se o personagem possuir a propriedade nivel
        switch (true) {
            case (personagem.nivel < 1000):
                personagem.elo = "Ferro";
                console.log(`Bem-vindo: ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
                console.log(`${personagem.nome}, continue sua jornada até o Bronze`);
                return personagem.elo;


            case (personagem.nivel >= 1000 && personagem.nivel < 2100):
                personagem.elo = "Bronze";
                console.log(`Bem-vindo ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
                console.log(`Parabéns ${personagem.nome}, continue sua jornada até o Prata`);
                return personagem.elo;


            case (personagem.nivel > 2100 && personagem.nivel < 4000):
                personagem.elo = "Prata";
                console.log(`Bem-vindo ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
                console.log(`Parabéns ${personagem.nome}, continue sua jornada até o Ouro`);
                return personagem.elo;

                break;
            case personagem.nivel >= 4000 && personagem.nivel <= 5000:
                personagem.elo = "Ouro";
                console.log(`Bem-vindo ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
                console.log(`Parabéns ${personagem.nome}, continue sua jornada até o Platina`);

                return personagem.elo;


                case personagem.nivel >= 5001 && personagem.nivel <= 6001:
                    personagem.elo = "Platina";
                    console.log(`Bem-vindo ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
                    console.log(`Parabéns ${personagem.nome}, continue sua jornada até o Diamante`);
    
                    return personagem.elo;


                    case personagem.nivel >= 6001 && personagem.nivel <= 7001:
                        personagem.elo = "Diamante";
                        console.log(`Bem-vindo ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
                        console.log(`Parabéns ${personagem.nome}, continue sua jornada até o Ascendente`);
        
                        return personagem.elo;           


                        case personagem.nivel >= 8001 && personagem.nivel <= 9000:
                            personagem.elo = "Ascendente";
                            console.log(`Bem-vindo ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
                            console.log(`Parabéns ${personagem.nome}, continue sua jornada até o Imortal`);
            
                            return personagem.elo;           

                            case personagem.nivel >= 9001 && personagem.nivel <= 10001:
                                personagem.elo = "Imortal";
                                console.log(`Bem-vindo ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
                                console.log(`Parabéns ${personagem.nome}, continue sua jornada até o Radiante`);
                
                                return personagem.elo; 
            
            
                                case personagem.nivel >= 10001:
                personagem.elo = "Radiante";
                console.log(`Bem-vindo ${personagem.nome}, seu nível é: ${personagem.nivel}, seu elo: ${personagem.elo}`);
console.log("Parabéns, você chegou no último Elo.")
                return personagem.elo;

            default:
                console.log("Bem vindo: " + personagem.nome);
console.log(`nivel: ${personagem.nivel}\nElo: ${personagem.elo}`)
            break;
        }

    }

}

nivel(personagemDio);

/*
caso queira subir o nivel do personagem a cada segundo; 
lembre de descomentar a linha de incrementação dentro da função nivel. 
function teste() {
    return nivel(personagemDio);
}

setInterval(teste, 1000);

*/

