import React, { useState } from 'react';
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
        <nav>
          <Link to="/">Home</Link> | <Link to="/cadastro">Cadastro</Link> | <Link to="/historico">Histórico</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro onSalvar={adicionarCadastro} listaCompleta={cadastros} />} /> 
          <Route path="/historico" element={<Historico lista={cadastros} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;   