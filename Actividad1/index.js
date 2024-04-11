const express = require('express');
const mysql = require("mysql");

const app = express();
app.use(express.json());


const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB,
});

// Ruta para agregar una tarea
app.post('/tareas', async (req, res) => {
  const insertQuery = 'INSERT INTO task SET ?';

  db.query(insertQuery, req.body, (err, results) => {
      if (err) {
          console.log(err);
          console.log(results);
          res.status(500).send('Error al insertar la task.');
      }
      else{
        console.log(err);
        console.log(results);
        res.status(200).json({ message: 'Tarea insertada correctamente', insertedId: results.insertId });
      }
  });
});

// Ruta para agregar una nota a una tarea
app.post('/tareas/:taskId/notas', async (req, res) => {
  const insertQuery = 'INSERT INTO nota SET ?';
  insertData = {
    tarea_id: req.params.taskId,
    ...req.body
  }
  db.query(insertQuery, insertData, (err, results) => {
      if (err) {
          console.log(err);
          console.log(results);
          res.status(500).send('Error al insertar la nota.');
      }
      else{
        console.log(err);
        console.log(results);
        res.status(200).json({ message: 'Nota insertada correctamente', insertedId: results.insertId });
      }
  });
   
});

// Ruta para listar notas de una tarea
app.get('/tareas/:taskId/notas', async (req, res) => {
  const taskId = req.params.taskId;

  const selectQuery = 'SELECT * FROM nota WHERE tarea_id = ?';

  db.query(selectQuery, taskId, (err, results) => {
      if (err) {
          console.error('Error al obtener las notas: ', err);
          res.status(500).send('Error al obtener las notas.');
          return;
      }

      if (results.length === 0) {
          res.status(404).json({ message: 'Tarea no encontrada o sin notas ingresadas' });
      } else {
          res.status(200).json(results);
      }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API REST executing in port ${PORT}`);
});
