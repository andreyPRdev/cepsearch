import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';
import Historico from './pages/historico/historico';

function App() {
  const [cadastros, setCadastros] = useState([]);

  const adicionarCadastro = (novo) => {
    setCadastros((antigos) => [novo, ...antigos]);
  };

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <Link to="/" className="navbar-brand">CEP Search</Link>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/historico">Histórico</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home total={cadastros.length} />} />
          <Route path="/cadastro" element={<Cadastro onSalvar={adicionarCadastro} listaCompleta={cadastros} />} />
          <Route path="/historico" element={<Historico lista={cadastros} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;