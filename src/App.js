import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import ListaDeCarros from './ListaDeCarros';
import Cadastro from './Cadastro';
import Login from './Login';
import logo from './logo.png';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [carros, setCarros] = useState([
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
  ]);

  const handleAlugar = (id) => {
    if (!usuarioLogado) {
      alert('Efetue o login para alugar um carro.');
      return;
    }
    // Lógica de aluguel aqui
    alert(`Aluguel do veículo ${id} efetuado com sucesso!`);
  };

  const handleCadastro = (nome, email, senha, endereco) => {
    const novoUsuario = { nome, email, senha, endereco };
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.some(u => u.email === email);
    if (usuarioExistente) {
      alert('Usuário já cadastrado com este e-mail.');
      return;
    }
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
  };

  const handleLogin = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuarioEncontrado) {
      setUsuarioLogado(true);
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="App">
      <Header />
      {!usuarioLogado && <Login onLogin={handleLogin} onCadastro={handleCadastro} />}
      <div className="carros-container">
      <ListaDeCarros carros={carros} onAlugar={handleAlugar} usuarioLogado={usuarioLogado} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
