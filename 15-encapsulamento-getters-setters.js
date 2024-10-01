class personagem {
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
get classe(){
    return this.#classe;
}
set classe(classe){
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
}
