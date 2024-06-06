// Login.js
import React, { useState } from 'react';
import './Login.css';
import Cadastro from './Cadastro';

function Login({ onLogin, onCadastro }) { // Certifique-se de receber a prop onCadastro
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuarioEncontrado) {
      onLogin(email, senha);
    } else {
      alert('Usuário não encontrado.');
    }
  };

  const handleCadastroClick = () => {
    setMostrarCadastro(true);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLoginSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Entrar</button>
        <button type="button" onClick={handleCadastroClick}>Cadastro</button>
        {mostrarCadastro && <Cadastro onCadastro={onCadastro} />} {/* Aqui você passa a prop onCadastro */}
      </form>
    </div>
  );
}

export default Login;
