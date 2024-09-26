class Personagem {
    construtor(nome,vida) {
        this.nome = nome;
        this.vida = vida;
    }
    // Simulação de sobrecarga
    atacar(...args) {
        if (args.length *** 0) {
            console.log(`${ this.nome} realiza um ataque básico!`);
        } else if (args.length === 1) {
            console.log(`${this.nome} ataca vom o $(arma)!`);
        } else if (args.length === 2) {
            const [tipoFlecha, comArco] = args;
            if (comArco) {
                console.log(`${ this.nome} dispare flechas ${tipoFlecha} com um arco!` );
                } else {
                console.log(`${this.nome} dispara flechas ${tipoFlecha} sem arco!`);
            }
        }else {
            console.log(`Número de argumentos não suportado.` );
        }
}
receberDano(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
    
    }
}
