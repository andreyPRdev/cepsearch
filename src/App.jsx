import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';
import Historico from './pages/historico/historico';
import { saveCadastroDB, getCadastrosDB } from "./utils/cadastroDB";

function App() {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const carregarCadastros = async () => {
      const lista = await getCadastrosDB();
  
      lista.sort((a, b) => b.id - a.id);
  
      setCadastros(lista);
    };
  
    carregarCadastros();
  }, []);

  const adicionarCadastro = async (novo) => {
    await saveCadastroDB(novo);
  
    const lista = await getCadastrosDB();
  
    lista.sort((a, b) => b.id - a.id);
  
    setCadastros(lista);
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