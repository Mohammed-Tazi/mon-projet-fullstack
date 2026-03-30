const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connexion à MongoDB (remplacez par votre URI si besoin)
mongoose.connect('mongodb://localhost:27017/ma_base_de_donnees')
  .then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error("Erreur de connexion", err));

app.get('/', (req, res) => {
  res.send('Le serveur backend tourne !');
});

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});