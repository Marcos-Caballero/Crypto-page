import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

function CryptoChart({ coinId }) {
  const chartRef = useRef(null);
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    // Obtener datos históricos de la moneda
    const getHistoricalData = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );
        setHistoricalData(res.data.prices);
      } catch (error) {
        console.error('Error al obtener datos históricos:', error);
      }
    };

    getHistoricalData();
  }, [coinId]);

  useEffect(() => {
    if (chartRef.current && historicalData) {
      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: historicalData.map((entry) => new Date(entry[0]).toLocaleDateString()), // Array de fechas
          datasets: [
            {
              label: 'Variación de Precio',
              data: historicalData.map((entry) => entry[1]), // Array de precios
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day', // Ajusta la unidad de tiempo según tus datos.
              },
            },
            y: {
              beginAtZero: false,
            },
          },
        },
      });
    }
  }, [historicalData]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}

export default CryptoChart;
