//criando a classe Fornecedor
class Fornecedor {
    //criando os atributos
    #nome;
    #fone;

    //criando construtor
    constructor(){
        this.#nome = "Sem nome"
        this.#fone = "Sem fone"
    }

    constructor(nome,fone){
        this.#nome = nome
        this.#fone = fone
    }

    //criando o métodos stters
    setNome(nome){
        this.#nome = nome
    }

    setFone(fone){
        this.#fone = fone
    }

    //criando os métodos getters
    getNome(){
        return this.#nome
    }

    getFone(){
        return this.#fone
    }
}
export default Fornecedor