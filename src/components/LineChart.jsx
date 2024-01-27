import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import useDarkMode from "../utils/theme";
import { useEffect } from "react";
ChartJS.register(LineElement, PointElement, LinearScale, Title, Filler);

const createLinearGradient = (color1, color2) => {
  const ctx = document.createElement("canvas").getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 35);

  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
};

const LineChart = ({ status }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  //The next line of codes, randomData and randomLabel, generates mock data for the line gradient in the performance
  //component. I tried to generate data that would give me a chart similar to the one in the figma desig.
  const randomLabels = new Array(40).fill().map((_, i) => `item ${i + 1}`);
  const randomData = new Array(40).fill().map((_, i) => {
    const randomValue = Math.floor(Math.random() * 20);
    return randomValue < 12 ? 15 : randomValue;
  });

  const options = {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        min: 3,
      },
    },

    plugins: {
      legend: { display: false },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (context) {
            let label = context.formattedValue || "";
            return label;
          },
          title: function (context) {
            return null;
          },
        },
      },
    },
  };
  const data = {
    labels: randomLabels,
    datasets: [
      {
        label: "Sales Trend",
        data: randomData,
        borderColor:
          status === "Good" ? "rgba(102, 200, 123, 1)" : "rgba(237, 84, 78, 1)",
        borderWidth: 1,
        pointRadius: 0,
        fill: true,
        backgroundColor:
          status === "Good"
            ? createLinearGradient("rgba(102, 200, 123, 0.1)", "transparent")
            : createLinearGradient("rgba(237, 84, 78, 0.1)", "transparent"),
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default LineChart;
