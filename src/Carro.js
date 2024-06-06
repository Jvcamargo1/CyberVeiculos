import React, { useState } from 'react';
import './Carro.css';

function Carro({ id, marca, modelo, ano, quilometragem, valor, onAlugar, usuarioLogado }) {
  const [alugado, setAlugado] = useState(false);

  const handleAlugar = () => {
    if (usuarioLogado) {
      onAlugar(id);
      setAlugado(true);
    } else {
      alert('Por favor, faça login para alugar um carro.');
    }
  };;

  // Caminho para a imagem do carro
  const imageUrl = `/images/${id}.jpg`;

  const buttonClasses = `btn-alugar ${alugado && usuarioLogado ? 'btn-alugado' : ''}`;

  return (
    <div className="carro-card">
      <img src={imageUrl} alt={`${marca} ${modelo}`} className="carro-imagem" />
      <div className="carro-info">
        <h2>{marca} {modelo}</h2>
        <p>Ano: {ano}</p>
        <p>Quilometragem: {quilometragem}</p>
        <p>Valor: R${valor}</p>
      </div>
      <button className={buttonClasses} onClick={handleAlugar} disabled={alugado}>
        {alugado ? 'Alugado' : 'Alugar'}
      </button>
    </div>
  );
}

export default Carro;
