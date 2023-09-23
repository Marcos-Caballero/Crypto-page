import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
/* Llamando la API */
  const getData = async () => {
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(Error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
/* Generación de la estructura de la pagina */
  return (
    <div className="container">
      <div className='row'>
      <h1 className='text-center'>Cripto Mercado v0.7</h1>
      <input type='text' placeholder='¡Busca tu criptomoneda!' className='form-control bg-dark text-secondary border-0 mt-4 text-center' autoFocus onChange={e => setSearch(e.target.value)}/>
      <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
