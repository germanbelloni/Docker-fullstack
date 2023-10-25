const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Rutas de API
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the API!' };
  res.json(data);
});

// Servir archivos estáticos del frontend
app.use(express.static('frontend/build'));

// Manejar todas las demás rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});