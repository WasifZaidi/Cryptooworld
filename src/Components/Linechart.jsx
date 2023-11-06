import React, { useEffect, useRef } from "react";
import "./Css/LineChart.css";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(
        coinHistory.data.history[i].timestamp*1000
      ).toLocaleDateString("en-US")
    );
    }

const data = {
  labels: coinTimestamp,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: coinPrice,
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
  return (
    <>
      <div className="Chart">
        <div className="Chart-title">
          <h1>{coinName} Price Chart </h1>
        </div>
        <div className="Details">
          <b>{coinHistory?.data?.change} </b>
          <b>Current {coinName} Price ${currentPrice}</b>
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  );
}
export default LineChart;