const express = require('express');
const app = express();
const contentRoutes = require('./routes/contentRoutes');
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Utiliser les routes de contenu
app.use('/api', contentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

