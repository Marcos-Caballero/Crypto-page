import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function CryptoChart({ sparkline, priceChange }) {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        data: [],
      },
    ],
    chart: {
      type: "area",
      height: 150,
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    tooltip: { enabled: false },
    stroke: { width: 1 },
    colors: [chartColor()],
  });

  useEffect(() => {
    // Verificar si sparkline.price es un array antes de usarlo
    if (Array.isArray(sparkline.price)) {
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        series: [{ data: [...sparkline.price] }],
      }));
    }
  }, [sparkline.price]);

  function chartColor() {
    if (priceChange <= 0) {
      return "#ff3131";
    } else {
      return "#25df3e";
    }
  }

  return <ReactApexChart options={chartOptions} series={chartOptions.series} className="chart" />;
}

export default CryptoChart;
