import React from 'react';
import { Link } from 'react-router-dom';

function Home({ total }) {
  return (
    <div className="home-container">
      <h1 className="home-title">CEP Search</h1>
      <p className="home-subtitle">Total de registros salvos: {total}</p>

      <div className="home-actions">
        <Link to="/cadastro" className="home-card">
          <span className="home-card-icon">＋</span>
          <span>Cadastrar Novo Endereço</span>
        </Link>

        <Link to="/historico" className="home-card">
          <span className="home-card-icon">📋</span>
          <span>Ver Histórico</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;