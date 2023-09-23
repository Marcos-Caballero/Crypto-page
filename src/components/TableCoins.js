import React from "react";
import CoinRow from "./CoinRows";

const TableCoins = ({coins}) => {
    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    <td>name</td>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} />
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins