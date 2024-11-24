import { Line } from "react-chartjs-2";
import "chart.js/auto"; // This is important to avoid auto-registration issues

const ExerciseChart = ({ exerciseData }) => {
  // Default chart data
  const chartData = {
    labels: exerciseData.length
      ? exerciseData.map((dataPoint) =>
          new Date(dataPoint.date).toLocaleDateString()
        )
      : ["No data available"], // Fallback if no data
    datasets: [
      {
        label: "Calories Burned",
        data: exerciseData.length
          ? exerciseData.map((dataPoint) => dataPoint.calories)
          : [0], // Fallback value if no data
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Calories",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ position: "relative", height: "400px" }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ExerciseChart;
