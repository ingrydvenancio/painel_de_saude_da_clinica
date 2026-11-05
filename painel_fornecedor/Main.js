import Fornecedor from "./Fornecedor";
import FornecedorPessoa from "./Fornecedor_pessoa";


const fornecedor = new Fornecedor("Pedro", "(11)12345-5896")

//Classe FornecedorPessoa
console.log(`Dados do fornecedor:
    Nome:${fornecedor.getNome()}
    Fone:${fornecedor.getFone()}
    `);


const fornecedorPessoa = new FornecedorPessoa("Matilde", "(11)99687-8796", "14.159.746-4", "456.645.434-98")

//Exibir
console.log(`Dados do fornecedor:
    Nome:${fornecedor.getNome()}
    Fone:${fornecedor.getFone()}
    Rg:  ${fornecedorPessoa.getRg()}
    Cpf: ${fornecedorPessoa.getCpf()}
    `);