class Personagem {
  // Encapsulando os atributos com H, tornando-os privados.
  #nome;
  #classe;
  #nivel;
  #vida;
  #mana;

  // Método Construtor
  constructor(nome, classe, nivel, vida, mana) {
    this.#nome = nome;
    this.#classe = classe;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }

  // metodos getter e satters
  //metodos getter e setter para o atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  //metodos getter e setter para o atributo classe
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }
  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }
  get vida() {
    return this.#vida;
  }

  set vida(vida) {
    this.#vida = vida;
  }
  get mana() {
    return this.#mana;
  }
  set mana(mana) {
    this.#mana = mana;
  }
  // Simulação de sobrecarga
  atacar(...args) {
    if (args.length == 0) {
      console.log(`${this.nome} realiza um ataque básico!`);
    } else if (args.length === 1) {
      console.log(`${this.nome} ataca vom o $(arma)!`);
    } else if (args.length === 2) {
      const [tipoFlecha, comArco] = args;
      if (comArco) {
        console.log(`${this.nome} dispare flechas ${tipoFlecha} com um arco!`);
      } else {
        console.log(`${this.nome} dispara flechas ${tipoFlecha} sem arco!`);
      }
    } else {
      console.log(`Número de argumentos não suportado.`);
    }
  }
  receberDano(dano) {
    this.vida -= dano;
    console.log(
      `${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`
    );
}
defesa() {
    console.log(`${this.nome} se defendeu com ${this.#nivel * 2}pontos de defesa!`);
    }
}   


// classe derivada - Paladinho
class Paladinho extends Personagem {
    constructor(nome, nivel, vida, mana, furtividade) {
        super(nome, "Paladinho", nivel, vida, mana);
        this.furtividade = furtividade; //atributo especifico
    }

    //sobrescrevendo o metodo atacar
    atacar() {
        console.log(`${ this.nome} ataca silenciosamente com dano adicional pela furtividade!`);
    }

    //metodo especifico
    usarFurtividade() {
        console.log(`${this.nome} usa sua furtividade de nivel ${this.furtividade} para esconder!`);
    }
}


// classe derivada - Paladinho
class Paladinho extends Personagem {
    constructor(nome, nivel, vida, mana, furtividade) {
        super(nome, "Paladinho", nivel, vida, mana);
        this.furtividade = furtividade; //atributo especifico
    }

    //sobrescrevendo o metodo atacar
    atacar() {
        console.log(`${ this.nome} se defendeu com o escudo sagrado, absorvendo mais dano com base na fé (${this,fe})!`);
    }

    //metodo especifico
    usarFurtividade() {
        console.log(`${this.nome} usa sua fé para curar a si mesmo ou aliados!`);
    }
}

