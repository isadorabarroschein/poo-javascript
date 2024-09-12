class Pessoa {
    constructor(nome, idade, altura, peso) { // Atributos
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

//Metodo
falar(){
    console.log(`Olá, meu nome é ${this.nome}!`)
    }
}
// Objeto/instancia "pessoal" criada apartir da classe Pessoa
const pessoa1 = new Pessoa (`Isadora`, 40, 1.65,70.0);
pessoa1.falar(); // Chamada do método falar() da classe Pessoa

