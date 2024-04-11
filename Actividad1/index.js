const express = require('express');

const app = express();
app.use(express.json());

// Ruta para agregar una tarea
app.post('/tareas', async (req, res) => {
  throw new Error('Implementar la ruta para agregar una tarea');
});

// Ruta para agregar una nota a una tarea
app.post('/tareas/:taskId/notas', async (req, res) => {
  throw new Error('Implementar la ruta para agregar una nota');
});

// Ruta para listar notas de una tarea
app.get('/tareas/:taskName/notas', async (req, res) => {
  throw new Error('Implementar la ruta para listar notas');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API REST executing in port ${PORT}`);
});
