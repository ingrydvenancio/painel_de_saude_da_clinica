//importar fornecedor
import Fornecedor from './fornecedor.js'


//criando a classe
class FornecedorPessoa extends Fornecedor{

    #rg;
    #cpf;

    constructor(nome = "Sem nome", fone = "(00)0000-0000", rg = " ", cpf = " "){
        super(nome,fone);
        this.#rg=rg;
        this.#cpf=cpf;
    }

    //criando metodos setters
    setRg(rg){
        this.#rg= rg;
    }

    setCpf(cpf){
        this.#cpf =cpf;
    }

    getRg(){
        return this.#rg;
    }

    getCpf(){
        return this.#cpf;
    }
}

export default FornecedorPessoa;