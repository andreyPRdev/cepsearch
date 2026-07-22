import React, { useState } from 'react';


function Cadastro({ onSalvar, listaCompleta }) {
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleCepChange = (e) => {
    setCep(e.target.value.replace(/\D/g, '').slice(0, 8));
  };

  const pegarCep = async (cepValor) => {
    const response = await fetch(`https://viacep.com.br/ws/${cepValor}/json/`);
    const data = await response.json();
    if (data.erro) throw new Error('CEP não encontrado');
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    if (cep.length !== 8) {
      setErro('CEP inválido.');
      return;
    }

    setLoading(true);
    try {
      const dados = await pegarCep(cep);
      const novo = {
        id: Date.now(),
        nome,
        cep,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf,
        numero,
        complemento
      };

      onSalvar(novo); 
      
      setNome('');
      setCep('');
      setNumero('');
      setComplemento('');
      
      
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

  
  const ultimosTres = listaCompleta ? listaCompleta.slice(0, 3) : [];

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome: </label>
          <input type="text" value={nome} placeholder="obrigatório" onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>CEP: </label>
          <input type="text" value={cep} placeholder="obrigatório" onChange={handleCepChange} maxLength="8" required />
        </div>
        <div>
          <label>Número: </label>
          <input type="text" value={numero} placeholder="obrigatório" onChange={(e) => setNumero(e.target.value)} required />
        </div>
        <div>
          <label>Complemento: </label>
          <input type="text" value={complemento} placeholder="opcional" onChange={(e) => setComplemento(e.target.value)} />
        </div>
        {erro && <p>{erro}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Cadastrar'}
        </button>
      </form>

      <hr />
      
      <h2>Últimos Cadastros (3)</h2>
      {ultimosTres.length === 0 ? (
        <p>Nenhum cadastro recente.</p>
      ) : (
        <div>
          {ultimosTres.map((item) => (
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
      )}
    </div>
  );
}

export default Cadastro;   