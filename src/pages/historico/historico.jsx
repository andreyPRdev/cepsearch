import React from 'react';

function Historico({ lista }) {
  if (!lista || lista.length === 0) {
    return <h2>Nenhum registro no histórico.</h2>;
  }

  return (
    <div>
      <h1>Histórico de Registros ({lista.length})</h1>
      {lista.map((item) => (
        <div key={item.id} style={{border: '1px solid black', margin: '10px 0', padding: '10px'}}>
          <h3>{item.logradouro}, {item.numero}</h3>
          <p><strong>Nome:</strong> {item.nome}</p>
          <p><strong>CEP:</strong> {item.cep}</p>
          <p><strong>Bairro:</strong> {item.bairro}</p>
          <p><strong>Cidade/UF:</strong> {item.cidade} - {item.uf}</p>
          {item.complemento && <p><strong>Comp:</strong> {item.complemento}</p>}
        </div>
      ))}
    </div>
  );
}

export default Historico;   