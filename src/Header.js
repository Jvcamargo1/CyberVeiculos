import React from 'react';
import logo from './logo.jpg'; // Certifique-se de que este é o caminho correto

function Header() {
  return (
    <header>
      <img src={logo} alt="CyberVeículos - Aluguel de Veículos" className="logo" />
      {/* Outros */}
    </header>
  );
}

export default Header;