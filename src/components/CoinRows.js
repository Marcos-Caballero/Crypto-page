import React from 'react'
import StarCheckbox from './StarCheckbox'; /* Trayendo la estrellita */
import CryptoChart from './CryptoChart'; /* Trayendo el grafico */

/* Aqui va la estructura de las filas de la tabla */
const CoinRow = ({coin, index}) => {

    const formattedPrice = `US$ ${coin.current_price.toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        })}`;

    const formattedPriceChange = `${(coin.price_change_percentage_24h / 100).toLocaleString('es-ES', {
            style: 'percent',
            minimumFractionDigits: 1, // Establece la cantidad de dígitos decimales deseados
        })}`;

    console.log(coin, index)
    return (
        <tr key={coin.name} style={{ height: '30px', verticalAlign: 'middle' }} >
            <td style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
                <StarCheckbox />
                <span style={{ marginLeft: '5px' }}>{index}</span>
            </td>
            <td style={{ verticalAlign: 'middle' }}>    
                <img src={coin.image} alt={coin.symbol} style={{maxWidth: '5%', minWidth: '10%'}} className='me-4 imf-fluid'></img>
                <span>{coin.name}</span>
                <span className='ms-3 text-secondary text-uppercase'>{coin.symbol}</span>
            </td>
            <td style={{ verticalAlign: 'middle' }}>{formattedPrice}</td>
            <td style={{ verticalAlign: 'middle' }} className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
            {formattedPriceChange}
            </td>
            <td style={{ verticalAlign: 'middle' }}>{coin.total_volume}</td>
            <td style={{ verticalAlign: 'middle' }}>
            <CryptoChart sparklineData={coin.sparkline_in_7d.price} />
            </td>
        </tr>
    )
}

export default CoinRow