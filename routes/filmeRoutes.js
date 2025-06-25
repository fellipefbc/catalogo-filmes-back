// catalogo-filmes-back/routes/filmeRoutes.js

const express = require('express');
const router = express.Router();

const { 
  criarFilme, 
  listarFilmes, 
  listarFilmePorId,
  atualizarFilme, // Garanta que a função está sendo importada
  deletarFilme 
} = require('../controllers/filmeController');

// Rota para listar todos os filmes (GET /filmes)
router.get('/', listarFilmes);

// Rota para criar um novo filme (POST /filmes)
router.post('/', criarFilme);

// Rota para buscar um filme específico pelo ID (GET /filmes/:id)
router.get('/:id', listarFilmePorId);

// Rota para atualizar um filme pelo ID (PUT /filmes/:id)
router.put('/:id', atualizarFilme);

// Rota para deletar um filme pelo ID (DELETE /filmes/:id)
router.delete('/:id', deletarFilme);

module.exports = router;