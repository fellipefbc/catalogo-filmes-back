# API - Catálogo de Filmes

Esta é a API RESTful para a aplicação de catálogo de filmes, desenvolvida como parte do Trabalho Final da disciplina de Linguagem de Programação para Internet.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução do JavaScript no servidor.
- **Express:** Framework para criação do servidor e das rotas da API.
- **MongoDB Atlas:** Banco de dados NoSQL na nuvem para armazenamento dos dados.
- **Mongoose:** ODM para modelar os dados da aplicação e interagir com o MongoDB.
- **CORS:** Middleware para permitir requisições de origens diferentes (front-end).
- **Nodemon:** Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

## Endpoints da API

A URL base da API é `http://localhost:3001` (em desenvolvimento).

| Verbo  | Rota             | Descrição                                 | Corpo (Body) da Requisição (Exemplo)                                    |
| :----- | :--------------- | :---------------------------------------- | :---------------------------------------------------------------------- |
| `GET`    | `/filmes`        | Lista todos os filmes cadastrados.        | N/A                                                                     |
| `GET`    | `/filmes/:id`    | Busca um filme específico pelo seu ID.    | N/A                                                                     |
| `POST`   | `/filmes`        | Cadastra um novo filme.                   | `{ "titulo": "...", "sinopse": "...", ... }`                             |
| `PUT`    | `/filmes/:id`    | Atualiza todas as informações de um filme. | `{ "titulo": "...", "sinopse": "...", ... }`                             |
| `DELETE` | `/filmes/:id`    | Deleta um filme específico pelo seu ID.   | N/A                                                                     |

### Exemplo de corpo para `POST` e `PUT`:
```json
{
  "titulo": "Interestelar",
  "sinopse": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receber a população mundial.",
  "genero": "Ficção Científica",
  "anoLancamento": 2014,
  "diretor": "Christopher Nolan",
  "cartazUrl": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
}
```

## Como Executar o Projeto

1.  Clone este repositório.
2.  Navegue até a pasta do projeto: `cd catalogo-filmes-back`.
3.  Instale as dependências: `npm install`.
4.  Crie um arquivo `server.js` e configure sua string de conexão com o MongoDB Atlas na variável `MONGO_URI`.
5.  Inicie o servidor: `npm start`.
6.  O servidor estará rodando em `http://localhost:3001`.