import Paciente from "./Paciente.js";

class PacienteConvenio extends Paciente {
    #carteirinha;

    constructor(nome = "", altura = 0, peso = 0, cidade = "", carteirinha = "") {
        super(nome, altura, peso, cidade);
        this.#carteirinha = carteirinha;
    }

    getCarteirinha() {
        return this.#carteirinha;
    }

    setCarteirinha(carteirinha) {
        this.#carteirinha = carteirinha;
    }
}

export default PacienteConvenio;
