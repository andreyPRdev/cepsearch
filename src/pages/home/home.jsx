import React from 'react';
import { Link } from 'react-router-dom';

function Home({ total }) {
  return (
    <div>
      <h1>CEP Search</h1>
      <p>Total de registros salvos: {total}</p>
      
      <p>
        <Link to="/cadastro">Cadastrar Novo Endereço</Link>
      </p>
      <p>
        <Link to="/historico">Ver Histórico</Link>
      </p>
    </div>
  );
}

export default Home;   