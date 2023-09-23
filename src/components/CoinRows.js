import React from 'react'
/* Aqui va la estructura de las filas de la tabla */
const CoinRow = ({coin, index}) => {
    console.log(coin, index)
    return (
        <tr key={coin.name}>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: '10%'}} className='me-4 imf-fluid'></img>
                <span>{coin.name}</span>
                <span className='ms-3 text-secondary text-uppercase'>{coin.symbol}</span>
                </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                {coin.price_change_percentage_24h}
            </td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}

export default CoinRow