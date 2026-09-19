# Tabela de Campos - Ordens de Serviço

Exemplo simples de uma tabela HTML baseada na imagem de referência.

A tabela mostra os campos de uma estrutura de banco de dados, incluindo:

- Nome do campo
- Tipo de dado
- Tamanho ou precisão
- Se aceita valor nulo
- Tipo de chave
- Descrição ou regra de negócio

## Estrutura do projeto

```text
projetohtmlclovis/
├── index.html   # Estrutura da página e da tabela
├── config.js    # Dados dos campos que serão exibidos
├── script.js    # Código que cria as linhas da tabela
├── style.css    # Aparência e layout da tabela
└── README.md    # Documentação do projeto
```

## Como funciona

O projeto separa o conteúdo, o comportamento e a aparência:

1. O arquivo `config.js` possui um array chamado `camposTabela`.
2. Cada objeto desse array representa uma linha da tabela.
3. O arquivo `script.js` percorre esse array.
4. Para cada objeto, o JavaScript cria uma linha com seis células.
5. O arquivo `style.css` aplica o visual da tabela.
6. O arquivo `index.html` fornece a estrutura básica da página.

A ordem dos arquivos JavaScript no HTML é importante:

```html
<script src="config.js"></script>
<script src="script.js"></script>
```

O `config.js` precisa ser carregado primeiro porque o `script.js` utiliza a variável `camposTabela` criada nele.

## Como abrir o projeto

Não é necessário instalar bibliotecas ou configurar um servidor.

Basta abrir o arquivo `index.html` em um navegador. Também é possível abrir a pasta no Visual Studio Code e usar uma extensão como Live Server, caso você já tenha essa extensão instalada.

## Como adicionar ou alterar campos

Edite somente o arquivo `config.js`.

Cada campo deve seguir este formato:

```javascript
{
	nome: "nome_do_campo",
	tipo: "Varchar",
	tamanho: "100",
	nulo: "Não",
	chave: "-",
	descricao: "Explicação do campo."
}
```

### Significado das propriedades

- `nome`: nome do campo no banco de dados.
- `tipo`: tipo do dado, como `Inteiro`, `Varchar`, `Datetime` ou `Decimal`.
- `tamanho`: tamanho máximo ou precisão do campo. Use `"-"` quando não se aplicar.
- `nulo`: informe `"Sim"` ou `"Não"`.
- `chave`: informe `"PK"` para chave primária, `"FK"` para chave estrangeira ou `"-"` quando não houver chave.
- `descricao`: explicação do campo ou regra de negócio relacionada a ele.

### Exemplo adicionando um novo campo

Dentro do array `camposTabela`, adicione uma vírgula depois do último objeto e inclua o novo objeto:

```javascript
const camposTabela = [
	// Campos que já existem...
	{
		nome: "telefone_cliente",
		tipo: "Varchar",
		tamanho: "15",
		nulo: "Sim",
		chave: "-",
		descricao: "Telefone para contato com o cliente."
	}
];
```

Depois de salvar o arquivo, atualize a página do navegador. A nova linha será criada automaticamente.

## Observação sobre o JavaScript

O `index.html` sozinho não consegue ler os objetos do `config.js` nem criar linhas automaticamente. O JavaScript é usado justamente para carregar a configuração e montar a tabela.

Sem JavaScript, seria necessário escrever todas as linhas diretamente no HTML ou usar uma tecnologia de servidor, como PHP, para gerar a tabela antes de ela chegar ao navegador.

## Responsabilidade de cada arquivo

### `index.html`

Contém os elementos principais da página, o cabeçalho da tabela e o elemento `<tbody>` vazio onde as linhas serão inseridas.

### `config.js`

É o arquivo que deve ser alterado quando você quiser cadastrar, remover ou modificar os campos apresentados.

### `script.js`

Lê o array de configuração, cria os elementos HTML e insere as linhas dentro do `<tbody>`.

### `style.css`

Define cores, tamanhos, espaçamentos, bordas, larguras das colunas e rolagem horizontal para telas pequenas.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
