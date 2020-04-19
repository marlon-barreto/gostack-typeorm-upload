<img alt="GoStack" src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" />

<h3 align="center">
  Projeto Gostack Desafio06
</h3>

Rotas da aplicação
Agora que você já está com o template clonado e pronto para continuar, você deve verificar os arquivos da pasta src e completar onde não possui código com o código para atingir os objetivos de cada rota.

POST /transactions: A rota deve receber title, value, type, e category dentro do corpo da requisição, sendo o type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro do seu banco de dados, possuindo os campos id, title, value, type, category_id, created_at, updated_at.
Dica: Para a categoria, você deve criar uma nova tabela, que terá os campos id, title, created_at, updated_at.

Dica 2: Antes de criar uma nova categoria, sempre verifique se já existe uma categoria com o mesmo título. Caso ela exista, use o id já existente no banco de dados.

{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income",
  "category": "Alimentação"
}
Dica: Para criar uma categoria, sempre verifique antes se a categoria já existe no banco de dados. Por exemplo, se a categoria "Alimentação" não existir no banco de dados, crie essa categoria no mesmo momento, e utilize o id criado. Caso ela já exista, utilize o id que já está presente no banco de dados.

GET /transactions: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor da soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Salary"
      }
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Others"
      }
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Others"
      }
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Recreation"
      }
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
Dica: Dentro de balance, o income é a soma de todos os valores das transações com type income. O outcome é a soma de todos os valores das transações com type outcome, e o total é o valor de income - outcome.

Dica 2: Para fazer a soma dos valores, você pode usar a função reduce para agrupar as transações pela propriedade type, assim você irá conseguir somar todos os valores com facilidade e obter o retorno do balance.

DELETE /transactions/:id: A rota deve deletar uma transação com o id presente nos parâmetros da rota;
POST /transactions/import: A rota deve permitir a importação de um arquivo com formato .csv contendo as mesmas informações necessárias para criação de uma transação id, title, value, type, category_id, created_at, updated_at, onde cada linha do arquivo CSV deve ser um novo registro para o banco de dados, e por fim retorne todas as transactions que foram importadas para seu banco de dados. O arquivo csv, deve seguir o seguinte modelo


### Funcionalidades da aplicação

**`GET /transactions`**: Retornar uma listagem com todas as transações.

**`POST /transactions`**: Essa rota cadastra um transacao e category.

**`POST /transactions/import`**: Essa rota faz importação de um arquivo com formato .csv.

**`DELETE /transactions/:id`**: Essa deleta uma transação com o id presente nos parâmetros da rota.

### Como utilizar

Install the dependencies

```sh
$ yarn install -d
$ yarn dev:server
$ yarn test
$ yarn typeorm
```

### Como utilizar typeorm

**`Criar migration CreateAppointments`**:
 yarn typeorm migration:create -n CreateTransactions
 yarn typeorm migration:create -n CreateCategory
 yarn typeorm migration:create -n AlterTransactionsCategoryID


**`Executar uma migration no banco `**:
 yarn typeorm migration:run

 **`Voltar uma migration `**:
 yarn typeorm migration:revert

 **`Mostar todas as migrations executada `**:
 yarn typeorm migration:show


