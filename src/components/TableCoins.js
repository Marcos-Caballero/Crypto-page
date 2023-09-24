import React from "react";
import CoinRow from "./CoinRows";

const headers = ['#', 'Moneda', 'Precio actual', 'Tasa de cambio', 'Volumen ultimas 24h', 'Grafico']

const TableCoins = ({coins, search}) => {
/* Aqui está el buscador de criptos */
    const searchBar = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
        );
/* Aqui va la estructura de las columnas */
    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {
                    headers.map((header) => (
                        <td>{header}</td>
                    ))
                    }
                </tr>
            </thead>
            <tbody>
                {searchBar.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins