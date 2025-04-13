const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User');
const app = express();

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/bancoKredaDados', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // Serve index.html e style.css
app.use(express.urlencoded({ extended: true })); // Lê dados do formulário

// Rota para processar o formulário
app.post('/register', async (req, res) => {
  const { name, surname, email, password, phone } = req.body;

  console.log('📥 Dados recebidos do formulário:', req.body); // Log input

  try {
    const user = new User({ name, surname, email, password, phone });
    await user.save();
    res.send('✅ Dados salvos com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao salvar no banco:', err); // Log the real error
    res.status(500).send('❌ Erro ao salvar no banco');
  }
});


// Inicia o servidor
app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});
