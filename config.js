/*
  ARQUIVO DE CONFIGURAÇÃO DO DICIONÁRIO
  -------------------------------------

  Cada objeto dentro da constante representa uma coluna vinculada à tabela.
  A estrutura é usada pelo script.js para preencher automaticamente as tabelas.
*/
const campoPessoa = [
  {
    nome: "id_pessoa",
    tipo: "Inteiro",
    tamanho: "AutoIncremento",
    nulo: "Não",
    chave: "PK",
    descricao: "Chave primária da pessoa."
  },
  {
    nome: "nome_pessoa",
    tipo: "Varchar",
    tamanho: "100",
    nulo: "Não",
    chave: "-",
    descricao: "Nome completo da pessoa."
  },
  {
    nome: "cpf",
    tipo: "Varchar",
    tamanho: "14",
    nulo: "Não",
    chave: "-",
    descricao: "CPF da pessoa."
  },
  {
    nome: "telefone",
    tipo: "Varchar",
    tamanho: "15",
    nulo: "Sim",
    chave: "-",
    descricao: "Telefone para contato."
  },
  {
    nome: "email",
    tipo: "Varchar",
    tamanho: "100",
    nulo: "Sim",
    chave: "-",
    descricao: "E-mail para contato."
  }
];

const campoOS = [
  {
    nome: "id_os",
    tipo: "Inteiro",
    tamanho: "AutoIncremento",
    nulo: "Não",
    chave: "PK",
    descricao: "Chave primária da ordem de serviço."
  },
  {
    nome: "id_pessoa",
    tipo: "Inteiro",
    tamanho: "-",
    nulo: "Não",
    chave: "FK",
    descricao: "Pessoa responsável pela ordem de serviço."
  },
  {
    nome: "id_empresa",
    tipo: "Inteiro",
    tamanho: "-",
    nulo: "Não",
    chave: "FK",
    descricao: "Empresa vinculada à ordem de serviço."
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
    nome: "valor_total",
    tipo: "Decimal",
    tamanho: "10,2",
    nulo: "Não",
    chave: "-",
    descricao: "Valor total da ordem de serviço."
  },
  {
    nome: "status_os",
    tipo: "Varchar",
    tamanho: "20",
    nulo: "Não",
    chave: "-",
    descricao: "Status da ordem de serviço."
  }
];

const campoEmpresa = [
  {
    nome: "id_empresa",
    tipo: "Inteiro",
    tamanho: "AutoIncremento",
    nulo: "Não",
    chave: "PK",
    descricao: "Chave primária da empresa."
  },
  {
    nome: "nome_empresa",
    tipo: "Varchar",
    tamanho: "100",
    nulo: "Não",
    chave: "-",
    descricao: "Nome da empresa."
  },
  {
    nome: "cnpj",
    tipo: "Varchar",
    tamanho: "18",
    nulo: "Não",
    chave: "-",
    descricao: "CNPJ da empresa."
  },
  {
    nome: "telefone",
    tipo: "Varchar",
    tamanho: "15",
    nulo: "Sim",
    chave: "-",
    descricao: "Telefone do contato da empresa."
  },
  {
    nome: "email",
    tipo: "Varchar",
    tamanho: "100",
    nulo: "Sim",
    chave: "-",
    descricao: "E-mail da empresa."
  }
];

const campoEstoque = [
  {
    nome: "id_estoque",
    tipo: "Inteiro",
    tamanho: "AutoIncremento",
    nulo: "Não",
    chave: "PK",
    descricao: "Chave primária do estoque."
  },
  {
    nome: "id_produto",
    tipo: "Inteiro",
    tamanho: "-",
    nulo: "Não",
    chave: "FK",
    descricao: "Produto relacionado ao estoque."
  },
  {
    nome: "quantidade",
    tipo: "Inteiro",
    tamanho: "-",
    nulo: "Não",
    chave: "-",
    descricao: "Quantidade disponível em estoque."
  },
  {
    nome: "quantidade_minima",
    tipo: "Inteiro",
    tamanho: "-",
    nulo: "Não",
    chave: "-",
    descricao: "Quantidade mínima permitida no estoque."
  },
  {
    nome: "localizacao",
    tipo: "Varchar",
    tamanho: "50",
    nulo: "Sim",
    chave: "-",
    descricao: "Setor ou local de armazenamento."
  }
];

const campoFornecedor = [
  {
    nome: "id_fornecedor",
    tipo: "Inteiro",
    tamanho: "AutoIncremento",
    nulo: "Não",
    chave: "PK",
    descricao: "Chave primária do fornecedor."
  },
  {
    nome: "nome_fornecedor",
    tipo: "Varchar",
    tamanho: "100",
    nulo: "Não",
    chave: "-",
    descricao: "Nome do fornecedor."
  },
  {
    nome: "cnpj",
    tipo: "Varchar",
    tamanho: "18",
    nulo: "Não",
    chave: "-",
    descricao: "CNPJ do fornecedor."
  },
  {
    nome: "telefone",
    tipo: "Varchar",
    tamanho: "15",
    nulo: "Sim",
    chave: "-",
    descricao: "Contato do fornecedor."
  },
  {
    nome: "email",
    tipo: "Varchar",
    tamanho: "100",
    nulo: "Sim",
    chave: "-",
    descricao: "E-mail do fornecedor."
  }
];

const campoFinanceiro = [
  {
    nome: "id_financeiro",
    tipo: "Inteiro",
    tamanho: "AutoIncremento",
    nulo: "Não",
    chave: "PK",
    descricao: "Chave primária do financeiro."
  },
  {
    nome: "id_os",
    tipo: "Inteiro",
    tamanho: "-",
    nulo: "Não",
    chave: "FK",
    descricao: "Ordem de serviço vinculada ao lançamento financeiro."
  },
  {
    nome: "valor",
    tipo: "Decimal",
    tamanho: "10,2",
    nulo: "Não",
    chave: "-",
    descricao: "Valor do movimento financeiro."
  },
  {
    nome: "dt_vencimento",
    tipo: "Datetime",
    tamanho: "-",
    nulo: "Não",
    chave: "-",
    descricao: "Data de vencimento do pagamento."
  },
  {
    nome: "status_pagamento",
    tipo: "Varchar",
    tamanho: "20",
    nulo: "Não",
    chave: "-",
    descricao: "Status do pagamento."
  }
];

const campoProduto = [
  {
    nome: "id_produto",
    tipo: "Inteiro",
    tamanho: "AutoIncremento",
    nulo: "Não",
    chave: "PK",
    descricao: "Chave primária do produto."
  },
  {
    nome: "nome_produto",
    tipo: "Varchar",
    tamanho: "100",
    nulo: "Não",
    chave: "-",
    descricao: "Nome do produto."
  },
  {
    nome: "descricao",
    tipo: "Varchar",
    tamanho: "255",
    nulo: "Sim",
    chave: "-",
    descricao: "Descrição detalhada do produto."
  },
  {
    nome: "preco",
    tipo: "Decimal",
    tamanho: "10,2",
    nulo: "Não",
    chave: "-",
    descricao: "Preço unitário do produto."
  },
  {
    nome: "categoria",
    tipo: "Varchar",
    tamanho: "50",
    nulo: "Não",
    chave: "-",
    descricao: "Categoria ou tipo do produto."
  }
];
