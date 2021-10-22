
# Nodejs API Server

Empress / Nodejs / SQLite / Swagger

<br />

## Requisitos

- [Node.js](https://nodejs.org/) >= 12.x
- [SQLite](https://www.sqlite.org/index.html)

<br />

## Como usar o código

**#1** - Clone o projeto

```bash
$ git clone https://github.com/claubraine/node-falemais.git
$ cd node-falemais
```

**#2** - Renomei o arquivo
.env.exemplo para
.env


**#3** - Instale dependências via NPM or Yarn

```bash
$ npm i
$ composer require "darkaonline/l5-swagger"
// OR
$ yarn
```

**#4** - Executar SQLite migration via TypeORM

```bash
$ yarn typeorm migration:run

```
**#5** - Executar Teste

```bash
npm run test 
```

**#6** - Start a API (development mode)

```bash
$ npm run producao

```

**#7** - Gerando Build (arquivos gerados no diretprio `build`)

```bash
$ npm build
// OR
$ yarn build
```

O servidor API começará a usar a `PORT` especificada no aqruivo `.env` (default 5000).

<br />

## SQLite Path

The SQLite Path is set in `.env`, as `SQLITE_PATH`

<br />

## API

Swagger
API DOCUMENTAÇÃO: http://localhost:PORT/api/doc

```

<br />

Fale mais

Para descobrir os valores que vai ser pagos

get: http://localhost:PORT/falemais/{origem}/{destino}/{plano}/{minutos_falados}

exemplo: http://localhost:5000/falemais/011/017/60/80

Retorno esperado:

{
  "success": true,
  "plano": "FaleMais 60",
  "minutos_excedentes": 20,
  "custo_com_plano": "R$ 37.4",
  "custo_sem_plano": "R$ 152"
}

<br />

get: http://localhost:5000/origemdestino

Retorno esperado:

{
  "success": true,
  "result": [
    {
      "id": 1,
      "origem": "011",
      "destino": "016",
      "custo_minutos_com_plano": 1.9,
      "custo_minutos_sem_plano": 1.9,
      "custo_excedente": 10,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    },
    {
      "id": 2,
      "origem": "016",
      "destino": "011",
      "custo_minutos_com_plano": 2.9,
      "custo_minutos_sem_plano": 1.9,
      "custo_excedente": 10,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    },
    {
      "id": 3,
      "origem": "011",
      "destino": "017",
      "custo_minutos_com_plano": 1.7,
      "custo_minutos_sem_plano": 1.9,
      "custo_excedente": 10,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    },
    {
      "id": 4,
      "origem": "017",
      "destino": "011",
      "custo_minutos_com_plano": 2.7,
      "custo_minutos_sem_plano": 1.9,
      "custo_excedente": 10,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    },
    {
      "id": 5,
      "origem": "011",
      "destino": "018",
      "custo_minutos_com_plano": 0.9,
      "custo_minutos_sem_plano": 1.9,
      "custo_excedente": 10,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    },
    {
      "id": 6,
      "origem": "018",
      "destino": "011",
      "custo_minutos_com_plano": 1.9,
      "custo_minutos_sem_plano": 1.9,
      "custo_excedente": 10,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    }
  ]
}

<br />

get: http://localhost:5000/planos

Retorno esperado:

{
  "success": true,
  "result": [
    {
      "id": 1,
      "nome_plano": "FaleMais",
      "minutos": 30,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    },
    {
      "id": 2,
      "nome_plano": "FaleMais",
      "minutos": 60,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    },
    {
      "id": 3,
      "nome_plano": "FaleMais",
      "minutos": 90,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    },
    {
      "id": 4,
      "nome_plano": "FaleMais",
      "minutos": 120,
      "status": true,
      "date": "2021-10-22T00:11:21.000Z"
    }
  ]
}


<br />



# criar migração a partir de mudanças nos modelos
yarn migration:generate

# criar nova migração manual
yarn migration:create

# rodar migrações na base
yarn migration:run

# mostrar estado do banco
yarn migration:show

# voltar para a migração anterior
yarn migration:rollback

# resetar o schema (cuidado este comando limpa a base e cria novamente)
yarn migration:drop-create

# rodar os seeds
yarn seed:run

# criar novo arquivo de seeds
yarn seed:create