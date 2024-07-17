// const express = require('express');
// const cors = require('cors');
// const app = express();
// const sequelize = require('./config/database');
// const profilRoutes = require('./routes/profilRoutes');

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Route principale
// app.get("/", (req, res) => res.send("Express on Vercel"));

// // Utiliser les routes de contenu
// app.use('/api', profilRoutes);

// // Synchroniser la base de données
// sequelize.sync().then(() => {
//     console.log('Database & tables created!');
// });

// // Démarrer le serveur
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const profilRoutes = require('./routes/profilRoutes');

app.use(express.json());
app.use('/api', profilRoutes);

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



