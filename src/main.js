const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Configurando o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

// Configurar middleware para servir arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/styles')));
app.use(express.static(path.join(__dirname, '../public/images')));

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});