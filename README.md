# SysTest

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Resumo do projeto

Projeto de sistema básico de avaliação de hard skills.
Gestão básica de login, clientes, produtos e vendas.

## Stack utilizada

- `Node.js` v21.5.0.
- `concurrently` v8.2.2
- `lite-server` v2.6.1
- `bootstrap ` v4.6.0

## Instalação

Este projeto já conta com o código necessário para subir a aplicação em um servidor local:

```
├── dist
│   ├── assets
│   │   └── icons
│   │     └── sysicon.png
│   ├── css
│   │   ├── bootstrap.css
│   │   ├── bootstrap.css.map
│   │   ├── main.js
│   │   └── signin.js
│   ├── js
│   │   ├── controller
│   │   │ └── LoginController.js
│   │   ├── app.js
│   │   ├── cookie.js
│   │   └── app.js
│   ├── clientes.html
│   ├── index.html
│   ├── main.html
│   ├── produtos.html
│   └── vendas.html
├── package.json
├── package-lock.json
└── README.md
```

## Instalação do projeto

> **IMPORTANTE:** Se você usa Windows como sistema operacional, recomendamos fortemente o uso do WSL (Windows Subsystem for Linux).

Para executar em ambiente de desenvolvimento:

- Faça o `clone` este repositório em seu computador;
- Entre no diretório local onde o repositório foi clonado;
- Utilize o comando `npm run start` para "build" e subir o servidor local e expor a porta 3000 em `localhost`.

Este projeto utiliza o lite-server para gerenciar as mudanças na base de código, reiniciar o servidor e a página web diretamente no browser.

## Roadmap

- Autenticação
- Tratamento de erros
- Validações
