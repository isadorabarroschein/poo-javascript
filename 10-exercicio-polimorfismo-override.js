// Classe base personagem
class Cinema {
  constructor(sinopse, genero, roteiro, ator, personagem) {
    this.sinopse = sinopse;
    this.genero = genero;
    this.roteiro = roteiro;
    this.ator = ator;
    this.personagem = personagem;

  }

  mostrarSinopse() {
    console.log(`${this.sinopse} realiza um resumo do filme!`);
  }

  oscar() {
    console.log(
      `O ator ${this.ator} recebu o Oscar.`
    );
  }
}

// Classe Guerreiro que herda de personagem
class MinhaCulpa extends Cinema {
  constructor(sinopse, genero, roteiro, ator, personagem, iluminacao, efeitoEspecial) {
    super(sinopse, genero, roteiro, ator, personagem);
    this.iluminacao = iluminacao;
    this.efeitoEspecial = efeitoEspecial;
  }

  mostrarSinopse() {
    console.log(`Sinopse do filme Minha Culpa: ${this.sinopse}.`);
  }

  oscar() {
    console.log(
      `O ator ${this.ator} recebu o Oscar pela interpretação do personagem ${this.personagem}`
    );
  }
}
// Classe Guerreiro que herda de personagem
class Crepusculo extends Cinema {
  constructor(sinopse, genero, roteiro, ator, personagem, lobo, vampiro) {
    super(sinopse, genero, roteiro, ator, personagem);
    this.lobo = lobo;
    this.vampiro = vampiro; 
  }

  mostrarSinopse() {
    console.log(`Sinopse do filme Crepusculo: ${this.sinopse}.`);
  }

  oscar() {
    console.log(
      `O ator ${this.ator} recebu o Oscar pela interpretação do ${this.personagem} no filme Crepusculo`
    );
  }
}


// Criando instancias
const filmeMinhaCulpa = new MinhaCulpa("namorou o irmao","romance","pegou o irmao adotivo","Gabriel","Nick","luz natural","tiro");
filmeMinhaCulpa.mostrarSinopse();
filmeMinhaCulpa.oscar();

const filmeCrepusculo = new Crepusculo("um lobo e um vampiro","drama","lobo mata vampiro","Robert Pattinson","Edward Cullen","lobo","vampiro");
filmeCrepusculo.mostrarSinopse(); 
filmeCrepusculo.oscar();