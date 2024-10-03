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


// classe derivada - Paladino
class Paladino extends Personagem {
    constructor(nome, nivel, vida, mana, furtividade) {
        super(nome, "Paladino", nivel, vida, mana);
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


// classe derivada - Mecanico
class Mecanico extends Personagem {
    constructor(nome, nivel, vida, mana, furtividade) {
        super(nome, "Mecanico", nivel, vida, mana);
        this.furtividade = furtividade; //atributo especifico
    }

   receberDano(dano) {
   const danoReduzido = dano - this.engenharia;
   super.receberDano(danoReduzido);
   console.log(`${this.nome} usou sua engenharia para reduzir o dano em ${this.engenharia}.`);
   }
   // metodo especifico
   construirTorre() {
    console.log(`${this.nome} construiu uma torre defensiva!`);
   }
}

//criando instancia de classe derivada assassino
const assassino = new Assassino("Luna Sombria", 10, 100, 50, 8);
 // chamando os metodos 
 assassino.atacar(); // metodo sobrescrito
 assassino.usarFurtividade(); // metodo especifico


 // criando instancia da classe derivada paladino
 const paladino = new Paladino("Sir Lancelot", 12, 120, 70, 15);
 // Chamando os metodos
 paladino.defesa(); //metodo sobrescrito
 paladino.curar(); // metodo especifico

 // criando instancia de classe derivada mecanico
 const mecanico = new Mecanico("Roberto das Engrenagens", 8, 90, 40, 5);
  // chamando os metodos
  mecanico.receberDano(30); // metodo sobrescrito
 mecanico.construirTorre(); // metodo especifico

 console.log("----------------------------------");
 console.log("Modificando os objetos usando setters");
 console.log("----------------------------------");

 // modificando o objeto assassino usando setters
 assassino.nome = "Raven";
 console.log(`Nome modificado: ${assassino.nome}`);
 assassino.atacar();

 // modificando o objeto paladino usando setters
 paladino.vida = 150;
 console.log(`Vida modificada: ${paladino.vida}`);
 paladino.defesa();

 // modificando o objeto mecanico usando setters

 mecanico.mana = 60;
 console.log(`Mana modificada: ${mecanico.mana}`);
 mecanico.receberDano(50);

