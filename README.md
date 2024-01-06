# SysTest

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Resumo do projeto

Projeto de sistema básico de avaliação de hard skills.
Gestão básica de login, clientes, produtos e vendas.

## Stack utilizada

* `Node.js` v21.5.0.
* `concurrently` v8.2.2
* `lite-server` v2.6.1
* `bootstrap ` v4.6.0

## Instalação

Este projeto já conta com o código necessário para subir a aplicação em um servidor local:

```
├── .github
│   └── workflows
│       ├── pre-push.yaml
│       └── unit-tests-pr.yaml
├── src
│   ├── controllers
│   │   ├── autoresController.js
│   │   ├── editorasController.js
│   │   └── livrosController.js
│   ├── db
│   │   ├── migrations
│   │   │   └── 20230130173832_livraria.js
│   │   ├── seeds
│   │   │   └── livraria.js
│   │   ├── dbconfig.js
│   │   ├── knexfile.js
│   │   └── livraria.sqlite
│   ├── models
│   │   ├── autor.js
│   │   ├── editora.js
│   │   └── livro.js
│   ├── routes
│   │   ├── autoresRoutes.js
│   │   ├── editorasRoutes.js
│   │   ├── index.js
│   │   └── livrosRoutes.js
│   ├── test
│   │   ├── models
│   │   │   ├── autor.test.js
│   │   │   └── editora.test.js
│   │   ├── routes
│   │   │   ├── autoresRoutes.test.js
│   │   │   ├── editorasRoutes.test.js
│   │   │   └── livrosRoutes.test.js
│   │   └── livraria.sqlite
│   └── app.js
├── docker-compose.yaml
├── Dockerfile
├── .env
├── .eslintrc.cjs
├── .gitignore
├── package.json
├── package-lock.json
├── populate.sql
├── README.md
└── server.js
```
## Instalação do projeto

> **IMPORTANTE:** Se você usa Windows como sistema operacional, recomendamos fortemente o uso do WSL (Windows Subsystem for Linux).

Para executar em ambiente de desenvolvimento:

* Faça o `clone` este repositório em seu computador;
* Entre no diretório local onde o repositório foi clonado;
* Utilize o comando `npm run start` para "build" e subir o servidor local e expor a porta 3000 em `localhost`.

Este projeto utiliza o lite-server para gerenciar as mudanças na base de código, reiniciar o servidor e a página web diretamente no browser.

## Roadmap

* Autenticação
* Tratamento de erros
* Validações