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
        const chartData = {
            labels,
            datasets: [
              {
                data: sparklineData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          };

        return (
            <Line options={chartOptions} data={chartData}/>
        )
    };

export default CryptoChart;