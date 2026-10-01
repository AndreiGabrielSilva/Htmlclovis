/*
  MONTAGEM DA TABELA
  ------------------

  Este arquivo gera as linhas do dicionário de dados com base no arquivo config.js.
*/

function criarCelula(valor) {
  const celula = document.createElement("td");
  celula.textContent = valor;
  return celula;
}

function preencherTabela(idTabela, campos) {
  const corpoDaTabela = document.querySelector(`#${idTabela}`);

  if (!corpoDaTabela) {
    return;
  }

  campos.forEach((campo) => {
    const linha = document.createElement("tr");

    linha.appendChild(criarCelula(campo.nome));
    linha.appendChild(criarCelula(campo.tipo));
    linha.appendChild(criarCelula(campo.tamanho));
    linha.appendChild(criarCelula(campo.nulo));
    linha.appendChild(criarCelula(campo.chave));
    linha.appendChild(criarCelula(campo.descricao));

    corpoDaTabela.appendChild(linha);
  });
}

const dicionarioTabelas = [
  { id: "tabela-pessoa", campos: campoPessoa },
  { id: "tabela-os", campos: campoOS },
  { id: "tabela-empresa", campos: campoEmpresa },
  { id: "tabela-estoque", campos: campoEstoque },
  { id: "tabela-fornecedor", campos: campoFornecedor },
  { id: "tabela-financeiro", campos: campoFinanceiro },
  { id: "tabela-produto", campos: campoProduto }
];

dicionarioTabelas.forEach(({ id, campos }) => preencherTabela(id, campos));
