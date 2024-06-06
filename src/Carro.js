// Carro.js
import React from 'react';
import './Carro.css'; // Certifique-se de que o CSS está sendo importado

function Carro({ id, marca, modelo, ano, quilometragem, valor, onAlugar }) {
  const handleAlugar = () => {
    onAlugar(id);
  };

  // Caminho para a imagem do carro, assumindo que as imagens estão na pasta public
  const imageUrl = `/images/${id}.jpg`;

  return (
    <div className="carro-card">
      <img src={imageUrl} alt={`${marca} ${modelo}`} className="carro-imagem" />
      <div className="carro-info">
        <h2>{marca} {modelo}</h2>
        <p>Ano: {ano}</p>
        <p>Quilometragem: {quilometragem}</p>
        <p>Valor: R${valor}</p>
      </div>
      <button className="btn-alugar" onClick={handleAlugar}>Alugar</button>
    </div>
  );
}

export default Carro;
