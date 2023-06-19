// Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// React
import { FC, useState, useEffect } from "react";
// External libraries
import { Line } from "react-chartjs-2";

// Styles
import { SChartContainer } from "./styles/chartContainer.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface IProps {
  data: number[];
}

const ChartContainer: FC<IProps> = ({ data }) => {
  const [options] = useState({
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              unit: "hour",
              unitStepSize: 0.5,
              round: "hour",
              tooltipFormat: "h:mm:ss a",
              displayFormats: {
                hour: "MMM D, h:mm A",
              },
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: false,
            },
          },
        ],
      },
    },
  });
  const [NData, setNData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (data.length === 0) return;
    const labels: any = data?.map((_, idx) => idx);
    const datasets: any = [
      {
        data,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ];
    setNData({
      labels,
      datasets,
    });
  }, [data]);
  console.log(NData);
  return (
    <SChartContainer>
      <div className="text-container">
        <p>
          <strong>Ingresos</strong>
        </p>
        <h2>
          $442,000 <span>MXN</span>
        </h2>
      </div>
      <Line options={options} data={NData} />
    </SChartContainer>
  );
};
export default ChartContainer;
