/*
  MONTAGEM DA TABELA
  ------------------

  Este arquivo é responsável apenas pelo comportamento da página.
  Ele recebe os dados do array "camposTabela", que está no config.js,
  e cria uma linha HTML para cada objeto encontrado.
*/

// Localiza o corpo vazio da tabela definido no index.html.
const corpoDaTabela = document.querySelector("#tabela-corpo");

/*
  Esta função cria uma célula <td> com o texto informado.
  Usar uma função para isso evita repetir o mesmo código seis vezes
  para cada linha.
*/
function criarCelula(valor) {
  const celula = document.createElement("td");
  celula.textContent = valor;
  return celula;
}

/*
  Percorre todos os objetos da configuração e cria as linhas.
  A ordem dos appendChild define a ordem das colunas na tabela.
*/
camposTabela.forEach((campo) => {
  const linha = document.createElement("tr");

  linha.appendChild(criarCelula(campo.nome));
  linha.appendChild(criarCelula(campo.tipo));
  linha.appendChild(criarCelula(campo.tamanho));
  linha.appendChild(criarCelula(campo.nulo));
  linha.appendChild(criarCelula(campo.chave));
  linha.appendChild(criarCelula(campo.descricao));

  corpoDaTabela.appendChild(linha);
});
