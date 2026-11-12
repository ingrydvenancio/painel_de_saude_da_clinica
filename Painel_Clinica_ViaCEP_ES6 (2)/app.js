import Paciente from "./Paciente.js";
import PacienteConvenio from "./PacienteConvenio.js";

const form = document.getElementById("formPaciente");
const nomeInput = document.getElementById("nome");
const tipoInput = document.getElementById("tipo");
const carteirinhaInput = document.getElementById("carteirinha");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const cepInput = document.getElementById("cep");
const cidadeInput = document.getElementById("cidade");
const tabela = document.getElementById("tabelaPacientes");

function atualizarCarteirinha() {
    if (tipoInput.value === "Convenio") {
        carteirinhaInput.disabled = false;
        carteirinhaInput.required = true;
    } else {
        carteirinhaInput.disabled = true;
        carteirinhaInput.required = false;
        carteirinhaInput.value = "";
    }
}

tipoInput.addEventListener("change", atualizarCarteirinha);

cepInput.addEventListener("blur", buscarCep);

async function buscarCep() {
    const cepLimpo = cepInput.value.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
        alert("Digite um CEP válido com exatamente 8 dígitos.");
        cepInput.value = "";
        cidadeInput.value = "";
        return;
    }

    try {
        const resposta = await fetch(
            `https://viacep.com.br/ws/${cepLimpo}/json/`
        );

        if (!resposta.ok) {
            alert("Não foi possível consultar o CEP.");
            cidadeInput.value = "";
            return;
        }

        const dados = await resposta.json();

        if (dados.erro) {
            alert("CEP não encontrado.");
            cidadeInput.value = "";
            return;
        }

        cidadeInput.value = `${dados.localidade} / ${dados.uf}`;
    } catch (erro) {
        alert("Erro ao consultar o CEP. Verifique sua conexão com a internet.");
        cidadeInput.value = "";
        console.error(erro);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const tipo = tipoInput.value;
    const carteirinha = carteirinhaInput.value.trim();
    const altura = Number(alturaInput.value);
    const peso = Number(pesoInput.value);
    const cidade = cidadeInput.value.trim();

    if (nome === "") {
        alert("Preencha o nome do paciente.");
        nomeInput.focus();
        return;
    } else if (altura <= 0 || Number.isNaN(altura)) {
        alert("A altura deve ser maior que zero.");
        alturaInput.focus();
        return;
    } else if (peso <= 0 || Number.isNaN(peso)) {
        alert("O peso deve ser maior que zero.");
        pesoInput.focus();
        return;
    } else if (cidade === "") {
        alert("Informe um CEP válido para preencher a Cidade/UF.");
        cepInput.focus();
        return;
    } else if (tipo === "Convenio" && carteirinha === "") {
        alert("Informe o número da carteirinha do convênio.");
        carteirinhaInput.focus();
        return;
    }

    let paciente;

    if (tipo === "Convenio") {
        paciente = new PacienteConvenio(
            nome,
            altura,
            peso,
            cidade,
            carteirinha
        );
    } else {
        paciente = new Paciente(
            nome,
            altura,
            peso,
            cidade
        );
    }

    const imc = paciente.calcularIMC();
    const classificacao = paciente.definirClassificacao();

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${escapeHtml(paciente.getNome())}</td>
        <td>${tipo}</td>
        <td>${escapeHtml(paciente.getCidade())}</td>
        <td>${paciente.getAltura().toFixed(2)} m</td>
        <td>${paciente.getPeso().toFixed(2)} kg</td>
        <td>${imc.toFixed(2)}</td>
        <td>${classificacao}</td>
    `;

    tabela.appendChild(linha);

    form.reset();
    atualizarCarteirinha();
    cidadeInput.value = "";
    nomeInput.focus();
});

function escapeHtml(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}

atualizarCarteirinha();
