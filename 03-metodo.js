class Pessoa {
    constructor(nome,altura, peso, genero) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.genero = genero;
    }
    // Metodos
    falar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
}