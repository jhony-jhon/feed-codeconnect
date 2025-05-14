import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Orders from './components/Orders';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';



function App() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
 
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dados => {
      setDados(dados);
      setCarregando(false);
    });
  }, [])

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <SearchBar />
        <Filter />
        <Orders />
        <ul className='lista-cards'>
          {carregando ? <p>Carregando...</p> : (
            dados.length > 0 ? dados.map((item, index) => (
                <li key={index}>
                    <Card 
                        imagemUrl={item.imagem_capa}
                        titulo={item.titulo}
                        resumo={item.resumo}
                        linhasDeCodigo={item.linhas_de_codigo}
                        compartilhamentos={item.compartilhamentos}
                        comentarios={item.comentarios}
                        usuario={item.usuario}
                    />
                </li>
            )) : <p>Nenhum dado disponível.</p>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
