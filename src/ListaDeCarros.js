// ListaDeCarros.js
import React from 'react';
import Carro from './Carro';

function ListaDeCarros({ carros, onAlugar, usuarioLogado }) {
  return (
    <section>
      <h2>Lista de Veículos</h2>
      {carros.map(carro => (
        <Carro key={carro.id} {...carro} onAlugar={onAlugar} usuarioLogado={usuarioLogado} />
      ))}
    </section>
  );
}

export default ListaDeCarros;
