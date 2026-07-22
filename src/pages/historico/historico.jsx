import React from 'react';


function Historico({ lista }) {
  if (!lista || lista.length === 0) {
    return (
      <div className="historico-container">
        <h2 className="historico-vazio">Nenhum registro no histórico.</h2>
      </div>
    );
  }

  return (
    <div className="historico-container">
      <h1 className="historico-title">Histórico de Registros ({lista.length})</h1>

      <div className="historico-lista">
        {lista.map((item) => (
          <div key={item.id} className="historico-card">
            <h3>{item.logradouro}, {item.numero}</h3>
            <p><strong>Nome:</strong> {item.nome}</p>
            <p><strong>CEP:</strong> {item.cep}</p>
            <p><strong>Bairro:</strong> {item.bairro}</p>
            <p><strong>Cidade/UF:</strong> {item.cidade} - {item.uf}</p>
            {item.complemento && <p><strong>Comp:</strong> {item.complemento}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Historico;