// Cadastro.js
import React, { useState } from 'react';
import './Cadastro.css'; // Crie um arquivo CSS para estilizar o Cadastro

function Cadastro({ onCadastro }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha || !endereco) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onCadastro(nome, email, senha, endereco);
  };

  return (
    <div className="cadastro-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
