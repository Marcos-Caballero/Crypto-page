import React from "react";
import CoinRow from "./CoinRows";

const headers = ['#', 'Moneda', 'Precio', 'Porcentaje de cambio', '24 movimientos']

const TableCoins = ({coins}) => {
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
                <tr>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins