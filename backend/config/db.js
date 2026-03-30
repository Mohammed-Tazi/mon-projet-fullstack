const mongoose = require('mongoose');
require('dotenv').config(); // Charge les variables du .env

const connectDB = async () => {
    try {
        // On utilise process.env.MONGO_URI au lieu du lien en dur
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connecté via variable d'environnement !");
    } catch (err) {
        console.error("❌ Erreur :", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;