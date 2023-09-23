import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';

function App() {
  const [coins, setCoins] = useState([])

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
    console.log(res.data)
    setCoins(res.data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <div className='row'>
      <h1>Cripto Mercado v0.1</h1>
      <TableCoins coins={coins} />
      </div>
    </div>
  );
}

export default App;
