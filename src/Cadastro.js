// Cadastro.js
import React, { useState } from 'react';

function Cadastro({ onCadastro }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = () => {
    onCadastro(nome, email, senha, endereco);
  };

  return (
    <div>
      <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
      <button onClick={handleSubmit}>Cadastrar e logar</button>
    </div>
  );
}

export default Cadastro;
