// ListaDeCarros.js
import React from 'react';
import Carro from './Carro';
import './App.css'; 

function ListaDeCarros({ carros, onAlugar, usuarioLogado }) {
  return (
    <section className="lista-veiculos">
      <h2>Lista de Veículos disponiveis</h2>
      {carros.map(carro => (
        <Carro key={carro.id} {...carro} onAlugar={onAlugar} usuarioLogado={usuarioLogado} />
      ))}
    </section>
  );
}

export default ListaDeCarros;