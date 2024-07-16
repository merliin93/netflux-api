const express = require('express');
const cors = require('cors');
const contentRoutes = require('./routes/contentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route principale
app.get("/", (req, res) => res.send("Express on Vercel"));

// Utiliser les routes de contenu
app.use('/api', contentRoutes);

module.exports = app;

