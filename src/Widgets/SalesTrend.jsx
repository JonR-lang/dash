import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Loader from "../components/Loader";
import useDarkMode from "../utils/theme";

const createLinearGradient = (color1, color2) => {
  const ctx = document.createElement("canvas").getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SalesTrend = () => {
  const { isDarkMode } = useDarkMode();
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("Weekly");
  const getChartData = async () => {
    try {
      const response = await fetch("../src/data/sales.json");

      const data = await response.json();

      setChartData(data.sales);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getChartData();
    }, 3000);
  }, []);

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        border: {
          dash: [3],
        },
        suggestedMin: 0,
        suggestedMax: 50000,
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
    responsive: true,
    maintainAspectRatio: false,
  };

  const data = {
    labels: chartData.map((item) => item.monthname.slice(0, 3)),
    datasets: [
      {
        label: "Sales Trend",
        data: chartData.map((item) => item.sales),
        backgroundColor: "rgba(52, 202, 165, 0.3)",
        hoverBackgroundColor: createLinearGradient(
          "rgba(52, 202, 165, 1)",
          "transparent"
        ),
        borderWidth: 0,
        borderRadius: 100,
      },
    ],
  };

  return (
    <div className='bg-white p-3 rounded-lg relative col-span-full lg:col-span-1 dark:bg-black/70 dark:custom-backdrop custom-shadow dark:custom-shadow-dark '>
      <div className='flex justify-between items-center font-[500] py-1'>
        <h2 className='text-customDarkSlate font-semibold dark:font-bold dark:text-white/80'>
          Sales Trend
        </h2>
        <div className='flex gap-3 items-center text-sm'>
          <p>Sort by: </p>
          <select
            name='sort-timeframe'
            id='sort-timeframe '
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
            className='focus:outline-0 focus:border focus:border-customTurquoise bg-white rounded-xl border p-1 text-xs text-customDarkSlate cursor-pointer dark:bg-transparent dark:text-white/80'>
            <option className='py-2 text-center dark:bg-black' value='Daily'>
              Daily
            </option>
            <option className='py-2 text-center dark:bg-black' value='Weekly'>
              Weekly
            </option>
            <option className='py-2 text-center dark:bg-black' value='Monthly'>
              Monthly
            </option>
            <option className='py-2 text-center dark:bg-black' value='Yearly'>
              Yearly
            </option>
          </select>
        </div>
      </div>

      {isLoading && <Loader />}

      <div className='relative h-[48vh]'>
        {chartData && chartData.length > 0 && (
          <Bar data={data} options={options}></Bar>
        )}
      </div>
    </div>
  );
};

export default SalesTrend;
