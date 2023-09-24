import React, { useEffect, useRef } from 'react';
import { Line, Chart } from 'react-chartjs-2';

function CryptoChart({ sparklineData }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
        // Destruye el gráfico anterior si existe
        chartRef.current.destroy();
        }

        // Crea el nuevo gráfico
        const ctx = document.getElementById('chart-canvas');
        chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sparklineData.map((_, index) => index.toString()),
            datasets: [
            {
                label: 'Precio',
                data: sparklineData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
            },
            ],
        },
        options: {
            scales: {
            x: {
                type: 'category', // Establece el tipo de escala como "category"
                labels: sparklineData.map((_, index) => index.toString()), // Utiliza las etiquetas del eje X del data
                beginAtZero: true, // Comienza en cero en el eje X (ajusta según tus necesidades)
            },
            y: {
                beginAtZero: false,
                display: false, // Oculta las etiquetas del eje Y
            },
            },
            plugins: {
            legend: {
                display: false, // Oculta la leyenda
            },
            },
        },
        });
    }, [sparklineData]);

    return <canvas id="chart-canvas" />;
}

export default CryptoChart;