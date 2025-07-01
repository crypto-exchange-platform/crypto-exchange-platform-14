import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { ChartOptions } from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

export default function TradeChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'BTC/USDT Volume ($M)',
        data: [850, 740, 920, 890, 1000, 1100, 950],
        borderColor: '#00ffcc',
        tension: 0.3,
        fill: false,
        pointRadius: 3,
        pointBackgroundColor: '#00ffcc',
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: '#ccc' },
        grid: { color: '#222' },
      },
      y: {
        ticks: { color: '#ccc' },
        grid: { color: '#222' },
      },
    },
    plugins: {
      legend: {
        labels: { color: '#ccc' },
      },
      tooltip: {
        mode: 'index', 
        intersect: false,
      },
    },
  }

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <Line data={data} options={options} />
    </div>
  )
}
 