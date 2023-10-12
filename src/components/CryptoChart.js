import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = Array.from({ length: 168 }, (_, index) => index + 1);

  export const chartOptions = {
    responsive: false,
    scales: {
        y: {display:false},
        x: {display:false},
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

    const CryptoChart = ({sparklineData}) => {
        const firstValue = sparklineData[0];
        const lastValue = sparklineData[sparklineData.length - 1];
        const chartData = {
            labels,
            datasets: [
              {
                data: sparklineData,
                borderColor: firstValue > lastValue ? 'red' : 'green', //cambia el color segun si ha subido o bajado
                backgroundColor: 'rgba(255, 99, 132, 0.5)',//fondo del grafico
                pointRadius: 0,// quitar el marcador en cada pico
              },
            ],
          };
          const chartSize = {
            width: 300, // Personaliza el ancho del gráfico
            height: 80, // Personaliza la altura del gráfico
          };

        return (
            <Line options={chartOptions} data={chartData} width={chartSize.width} height={chartSize.height} />
        )
    };

export default CryptoChart;