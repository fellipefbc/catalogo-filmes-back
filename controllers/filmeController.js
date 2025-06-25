// catalogo-filmes-back/controllers/filmeController.js

const Filme = require('../models/Filme');

const criarFilme = async (req, res) => {
  try {
    const novoFilme = new Filme(req.body);
    await novoFilme.save();
    res.status(201).json(novoFilme);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listarFilmes = async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listarFilmePorId = async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (!filme) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    res.status(200).json(filme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const atualizarFilme = async (req, res) => {
  try {
    const filmeAtualizado = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!filmeAtualizado) {
      return res.status(404).json({ message: 'Filme não encontrado para atualização' });
    }
    res.status(200).json(filmeAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletarFilme = async (req, res) => {
  try {
    const filmeDeletado = await Filme.findByIdAndDelete(req.params.id);
    if (!filmeDeletado) {
      return res.status(404).json({ message: 'Filme não encontrado para deletar' });
    }
    res.status(200).json({ message: 'Filme deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  criarFilme,
  listarFilmes,
  listarFilmePorId,
  atualizarFilme,
  deletarFilme,
};