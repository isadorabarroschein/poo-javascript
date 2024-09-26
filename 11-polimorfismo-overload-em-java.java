 classe Personagem {
    //Atributos
    private String nome;
    private int vida;
    //metodo construtor da classe personagem
    public Personagem(String nome, int vida){
        this.nome = nome;
        this.vida = vida;
    }
    //Sobrecarga do metodo atacar
    public vold atacar() {
        System.out.println(nome +" realiza um ataque básico!");
    }
    public vold atacar(String arma) {
        System.out.println(nome + " ataca com o " + arma + "!");
    }
    public vold atacar(String tipoFlecha, boolean comArco) {
        if (comArco) {
            System.out.println(nome + " dispara flechas " + tipoFlecha + " com um arco!");
        } else {
             System.out.println(nome + " dispara flechas " + tipoFlecha + "sem arco!");
      }
 }
 public void receberDano(int dano) {
     vida -= dano;
     System.out.println(nome + " recebe " + dano + " de dano. Vida restante: " + vida);
    }
 }