import React from "react";
import CoinRow from "./CoinRows";

const headers = ['#', 'Moneda', 'Precio actual', 'Tasa de cambio', 'Volumen ultimas 24h', 'Grafico']

const TableCoins = ({ coins, search }) => {
    const filteredCoins = coins.filter(
        (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    const errorMessage =
        filteredCoins.length === 0 && search.trim() !== ""
        ? "No se encontraron resultados."
        : "";

    return (
        <div>
        {errorMessage && <p>{errorMessage}</p>}
        <table className="table table-dark mt-4 table-hover">
            <thead>
            <tr>
                {headers.map((header) => (
                <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {filteredCoins.map((coin, index) => (
                <CoinRow coin={coin} key={index} index={index + 1} />
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default TableCoins;
