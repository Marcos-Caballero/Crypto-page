import React from 'react'
import StarCheckbox from './StarCheckbox'; /* Trayendo la estrellita */
import CryptoChart from './CryptoChart';

/* Aqui va la estructura de las filas de la tabla */
const CoinRow = ({coin, index}) => {
    console.log(coin, index)
    return (
        <tr key={coin.name}>
            <td style={{ display: 'flex', alignItems: 'center' }}>
                <StarCheckbox />
                <span style={{ marginLeft: '5px' }}>{index}</span>
            </td>
            <td>
                <img src={coin.image} alt={coin.name} style={{maxWidth: '5%', minWidth: '5%'}} className='me-4 imf-fluid'></img>
                <span>{coin.name}</span>
                <span className='ms-3 text-secondary text-uppercase'>{coin.symbol}</span>
                </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                {coin.price_change_percentage_24h}
            </td>
            <td>{coin.total_volume}</td>
            {/* <td style={{ maxWidth: '150px', maxHeight: '100px'}}>
            <CryptoChart sparklineData={coin.sparkline_in_7d.price} />
            </td> */}
        </tr>
    )
}

export default CoinRow