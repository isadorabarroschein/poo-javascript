// Classe base personagem
class Personagem {
  constructor(nome, vida) {
    this.nome = nome;
    this.vida = vida;
  }

  atacar() {
    console.log(`${this.nome} realiza um ataque basico!`);
  }

  receberDano(dano) {
    this.vida -= dano;
    console.log(
      `${this.nome} recebu ${dano} de dano. Vida restante: ${this.vida}`
    );
  }
}

// Classe Guerreiro que herda de personagem
class Guerreiro extends Personagem {
  constructor(nome, vida, arma) {
    super(nome, vida);
    this.arma = arma;
  }

  atacar() {
    console.log(`${this.nome} ataca com a  ${this.arma}!`);
  }
}

// Classe Mago que herda de personagem
class Mago extends Personagem {
  constructor(nome, vida, feitico) {
    super(nome, vida);
    this.feitico = feitico;
  }

  atacar() {
    console.log(`${this.nome} lanca  ${this.feitico}!`);
  }
}

// Classe Arqueiro que herda de personagem
class Arqueiro extends Personagem {
  constructor(nome, vida, tipoFlecha) {
    super(nome, vida);
    this.tipoFlecha = tipoFlecha;
  }

  atacar() {
    console.log(`${this.nome} dispara flechas ${this.tipoFlecha}!`);
  }
}

// Criando instancias de guerreiro, mago e arqueiro
const guerreiro = new guerreiro("Arthur", 100, "espada");
guerreiro.atacar(); // saida: arthur ataca com a espada!
guerreiro.receberDano(20); // saida: arthur recebeu dano. Vida restante:80

const mago = new Mago("merlin", 80, "bola de fogo");
mago.atacar(); // saida: merlin recebeu 15 de dano. Vida restante: 65

const arqueiro = new Arqueiro("legolas", 120, "explosiva");
arqueiro.atacar(); // saida: legolas dispara flechas explosiva!
arqueiro.receberDano(10); // saida: legolas recebeu 10 dano. Vida restante:80
