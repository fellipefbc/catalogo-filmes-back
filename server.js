// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// --- IMPORTAR ROTAS ---
const filmeRoutes = require('./routes/filmeRoutes');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// --- CONEXÃO COM O MONGODB ---
// ATENÇÃO: Lembre-se de substituir pela sua string de conexão real!
const MONGO_URI = 'mongodb+srv://devuser:senha123@cluster0.o9mwg37.mongodb.net/catalogo_filmes?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
  .catch(err => console.error('Erro ao conectar com o MongoDB:', err));

// --- ROTAS DA API ---
// Dizemos ao Express para usar o arquivo de rotas para qualquer requisição que comece com '/filmes'
app.use('/filmes', filmeRoutes);

// Inicia o servidor e o faz "ouvir" na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});