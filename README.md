# CEP Search

Projeto desenvolvido para buscar informações de um CEP utilizando a API ViaCEP.

## Funcionalidades

- Buscar endereço pelo CEP
- Exibir rua, bairro, cidade e estado
- Validar CEP antes da busca

## Tecnologias utilizadas

- React
- JavaScript
- HTML
- CSS
- API ViaCEP

## Fluxo da aplicação

1. O usuário digita um CEP no campo de busca.
2. O React armazena o valor informado utilizando `useState`.
3. Ao clicar em **Buscar**, é feita uma requisição para a API ViaCEP.
4. A API retorna os dados do endereço correspondente ao CEP informado.
5. As informações são armazenadas no estado da aplicação.
6. O React atualiza a interface automaticamente exibindo os dados do endereço. Caso o CEP seja inválido ou inexistente, uma mensagem de erro é apresentada.

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/andreyPRdev/cepsearch.git
```

2. Acesse a pasta do projeto:

```bash
cd cepsearch
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

## Autor

Andrey P. Rodrigues
