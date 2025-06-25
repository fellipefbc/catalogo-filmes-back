// catalogo-filmes-back/server.js

// Carrega as variáveis do arquivo .env para process.env
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const filmeRoutes = require('./routes/filmeRoutes');

const app = express();
// Usa a porta do .env ou a 3001 como padrão
const PORT = process.env.PORT || 3001; 

// Middlewares
app.use(cors());
app.use(express.json());

// --- CONEXÃO COM O MONGODB ---
// A string de conexão agora é lida da variável de ambiente
const MONGO_URI = process.env.MONGO_URI; 

// Validação para garantir que a variável foi carregada
if (!MONGO_URI) {
  console.error("Erro: A variável de ambiente MONGO_URI não está definida.");
  process.exit(1); // Encerra a aplicação se a URI não estiver disponível
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
  .catch(err => console.error('Erro ao conectar com o MongoDB:', err));

// --- ROTAS DA API ---
app.use('/filmes', filmeRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});