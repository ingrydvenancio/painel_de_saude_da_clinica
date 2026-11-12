class Paciente {
    #nome;
    #altura;
    #peso;
    #cidade;

    constructor(nome = "", altura = 0, peso = 0, cidade = "") {
        this.#nome = nome;
        this.#altura = altura;
        this.#peso = peso;
        this.#cidade = cidade;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getAltura() {
        return this.#altura;
    }

    setAltura(altura) {
        this.#altura = altura;
    }

    getPeso() {
        return this.#peso;
    }

    setPeso(peso) {
        this.#peso = peso;
    }

    getCidade() {
        return this.#cidade;
    }

    setCidade(cidade) {
        this.#cidade = cidade;
    }

    calcularIMC() {
        return this.#peso / (this.#altura * this.#altura);
    }

    definirClassificacao() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc < 25) {
            return "Peso normal";
        } else if (imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }
    }
}

export default Paciente;
