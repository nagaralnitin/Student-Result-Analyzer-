// src/components/Chart/Chart.js

import React from "react";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

const Chart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>Result Visualization</h2>
      <Bar data={data} />
    </div>
  );
};

export default Chart;
