// models/Filme.js
const mongoose = require('mongoose');

// O Schema define a estrutura do documento (linha) no banco de dados.
const filmeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true, // O campo é obrigatório
  },
  sinopse: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  anoLancamento: {
    type: Number,
    required: true,
  },
  diretor: {
    type: String,
    required: true,
  },
  cartazUrl: {
    type: String,
    required: true,
  },
}, {
  // Adiciona os campos 'createdAt' e 'updatedAt' automaticamente
  timestamps: true,
});

// O Model é a interface que usamos para interagir com a coleção no banco.
// O Mongoose criará uma coleção chamada 'filmes' (plural e minúsculo) a partir do nome 'Filme'.
const Filme = mongoose.model('Filme', filmeSchema);

module.exports = Filme; // Exporta o modelo para que possamos usá-lo em outros arquivos