const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

app.get('/', (req, res) => {
    res.send('Serveur configuré avec .env et scripts npm !');
});

// Utilise le port du .env ou 3000 par défaut
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur en mode ${process.env.NODE_ENV || 'développement'} sur http://localhost:${PORT}`);
});