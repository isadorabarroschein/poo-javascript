class Carro {
  constructor(marca, modelo, ano, cor, kilometragem) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.kilometragem = kilometragem;
    this.velocidadeAtual = 0; // Atributo adicional para rastrear a velocidade atual
  }

  acelerar(incremento) {
    this.velocidadeAtual += incremento;
    console.log(
      `O carro ${this.modelo} acelerou para ${this.velocidadeAtual} km/h.`
    );
  }

  frear(decremento) {
    this.velocidadeAtual -= decremento;
    if (this.velocidadeAtual < 0) this.velocidadeAtual = 0;
    console.log(
      `O carro ${this.modelo} reduziu a velocidade para ${this.velocidadeAtual} km/h.`
    );
  }

  exibirInformacoes() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Cor: ${this.cor}`);
    console.log(`Quilometragem: ${this.kilometragem} km`);
    console.log(`Velocidade Atual: ${this.velocidadeAtual} km/h`);
  }

  realizarManutencao(km) {
    this.kilometragem += km;
    console.log(
      `A manutenção foi realizada. A nova quilometragem é ${this.kilometragem} km.`
    );
  }
}

