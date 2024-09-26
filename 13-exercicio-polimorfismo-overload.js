class Produto {
  constructor(
    nome,
    preco,
    categoria,
    marca,
    estoque,
    peso,
    dimensao,
    cor,
    garantia,
    desconto
  ) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.marca = marca;
    this.estoque = estoque;
    this.peso = peso;
    this.dimensao = dimensao;
    this.cor = cor;
    this.garantia = garantia;
    this.desconto = desconto;
  }

  calcularPrecoFinal() {
    return this.preco - this.preco * (this.desconto / 100);
  }

  atualizarEstoque(qtd) {
    this.estoque += qtd;
  }

 aplicarDesconto(param1, param2) {
        if (typeof param1 === 'number' && typeof param2 === 'undefined') {
            // Aplica desconto por valor
            this.desconto += param1;
        } else if (typeof param1 === 'number' && typeof param2 === 'number') {
            // Aplica desconto por percentual com limite
            if (param1 <= param2) {
                this.desconto += param1;
            } else {
                console.log("Desconto excede o limite permitido.");
            }
        } else {
            console.log("Parâmetros inválidos.");
        }
    }
}
class Eletronico extends Produto {
  constructor(
    nome,
    preco,
    categoria,
    marca,
    estoque,
    peso,
    dimensao,
    cor,
    garantia,
    desconto,
    voltagem,
    tipo
  ) {
    super(
      nome,
      preco,
      categoria,
      marca,
      estoque,
      peso,
      dimensao,
      cor,
      garantia,
      desconto
    );
    this.voltagem = voltagem;
    this.tipo = tipo; // Ex: "Smartphone", "Laptop"
  }
}

class Vestuario extends Produto {
  constructor(
    nome,
    preco,
    categoria,
    marca,
    estoque,
    peso,
    dimensao,
    cor,
    garantia,
    desconto,
    tamanho,
    material
  ) {
    super(
      nome,
      preco,
      categoria,
      marca,
      estoque,
      peso,
      dimensao,
      cor,
      garantia,
      desconto
    );
    this.tamanho = tamanho; // Ex: "P", "M", "G"
    this.material = material; // Ex: "Algodão", "Poliéster"
  }
}

class Alimento extends Produto {
  constructor(
    nome,
    preco,
    categoria,
    marca,
    estoque,
    peso,
    dimensao,
    cor,
    garantia,
    desconto,
    validade,
    tipoAlimento
  ) {
    super(
      nome,
      preco,
      categoria,
      marca,
      estoque,
      peso,
      dimensao,
      cor,
      garantia,
      desconto
    );
    this.validade = validade; // Data de validade
    this.tipoAlimento = tipoAlimento; // Ex: "Fresco", "Enlatado"
  }
}
const celular = new Eletronico("Smartphone X", 3000, "Eletrônicos", "Marca A", 50, 200, "15x7x0.8", "Preto", 12, 10, "110V", "Smartphone");
celular.aplicarDesconto(5);
console.log(celular.calcularPrecoFinal()); // 2700

const camiseta = new Vestuario("Camiseta Básica", 50, "Vestuário", "Marca B", 100, 200, "M", "Branca", 0, 0, "M", "Algodão");
camiseta.aplicarDesconto(10, 20);
console.log(camiseta.calcularPrecoFinal()); // 45

const arroz = new Alimento("Arroz", 20, "Alimentos", "Marca C", 200, 1000, "30x20x10", "Branco", 0, 5, "Seco");
arroz.aplicarDesconto(3);
console.log(arroz.calcularPrecoFinal()); // 17
