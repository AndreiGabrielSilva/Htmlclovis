/*
  ARQUIVO DE CONFIGURAÇÃO DA TABELA
  ---------------------------------

  É neste arquivo que você deve cadastrar, remover ou alterar os itens
  que aparecerão na tabela.

  Cada objeto dentro do array "camposTabela" representa uma linha.
  Não é necessário editar o index.html para adicionar novos campos.

  Propriedades disponíveis:
  - nome: nome da coluna/campo do banco de dados.
  - tipo: tipo de dado usado pelo campo.
  - tamanho: tamanho ou precisão; use "-" quando não se aplicar.
  - nulo: informe "Sim" ou "Não".
  - chave: informe "PK", "FK" ou "-".
  - descricao: explicação ou regra de negócio do campo.

  Para adicionar outro item, copie um objeto inteiro, coloque uma vírgula
  depois do objeto anterior e altere os valores.
*/
const camposTabela = [
  {
    nome: "id_os",
    tipo: "Inteiro",
    tamanho: "AutoIncremento",
    nulo: "Não",
    chave: "PK",
    descricao: "Chave primária da ordem de serviço."
  },
  {
    nome: "dt_emissao",
    tipo: "Datetime",
    tamanho: "-",
    nulo: "Não",
    chave: "-",
    descricao: "Data e hora em que a ordem de serviço foi emitida."
  },
  {
    nome: "status_os",
    tipo: "Varchar",
    tamanho: "20",
    nulo: "Não",
    chave: "-",
    descricao: "Status (Ex: 'Autorizado', 'Pago', 'Finalizada')."
  },
  {
    nome: "id_cliente",
    tipo: "Inteiro",
    tamanho: "-",
    nulo: "Não",
    chave: "FK",
    descricao: "Identificador do cliente que fez a ordem de serviço."
  },
  {
    nome: "cracha_tecnico",
    tipo: "Varchar",
    tamanho: "20",
    nulo: "Não",
    chave: "-",
    descricao: "Número do crachá do técnico responsável pela ordem de serviço."
  },
  {
    nome: "desc_serv",
    tipo: "Varchar",
    tamanho: "255",
    nulo: "Não",
    chave: "-",
    descricao: "Descrição do serviço prestado."
  },
  {
    nome: "valor_serv",
    tipo: "Decimal",
    tamanho: "10,2",
    nulo: "Não",
    chave: "-",
    descricao: "Valor do serviço prestado."
  },
  {
    nome: "desc_pecas",
    tipo: "Varchar",
    tamanho: "255",
    nulo: "Não",
    chave: "-",
    descricao: "Descrição das peças utilizadas/substituídas."
  }
];
