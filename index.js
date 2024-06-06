const express = require('express');
const app = express();
const port = 3000;

// Lista de carros para aluguel
let carros = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2020, quilometragem: 51241, valor: 100 },
  { id: 2, marca: 'Chevrolet', modelo: 'Onix', ano: 2022, quilometragem: 73524, valor: 80 },
  { id: 3, marca: 'Chevrolet', modelo: 'Cruze', ano: 2019, quilometragem: 112546, valor: 90 },
  { id: 4, marca: 'Renault', modelo: 'Kwid', ano: 2020, quilometragem: 102421, valor: 50 },
  { id: 5, marca: 'Renault', modelo: 'Duster', ano: 2022, quilometragem: 63754, valor: 95 },
  { id: 6, marca: 'Ford', modelo: 'Fiesta', ano: 2018, quilometragem: 82567, valor: 60 },
  { id: 7, marca: 'Ford', modelo: 'EcoSport', ano: 2021, quilometragem: 45890, valor: 85 },
  { id: 8, marca: 'Volkswagen', modelo: 'Gol', ano: 2019, quilometragem: 93782, valor: 70 },
  { id: 9, marca: 'Volkswagen', modelo: 'T-Cross', ano: 2020, quilometragem: 67430, valor: 90 },
  { id: 10, marca: 'Honda', modelo: 'Civic', ano: 2021, quilometragem: 38500, valor: 110 },
];

// Middleware para parsear JSON
app.use(express.json());

// Rota para listar todos os carros
app.get('/carros', (req, res) => {
  res.json(carros);
});

// Rota para realizar o aluguel de um carro
app.post('/alugar/:id', (req, res) => {
  const carro = carros.find(c => c.id === parseInt(req.params.id));
  if (carro) {
    res.json({ mensagem: 'Aluguel efetuado com sucesso' });
  } else {
    res.status(404).json({ mensagem: 'Carro não encontrado' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
