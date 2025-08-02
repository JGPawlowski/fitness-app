import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);


export default function Main() {

      const data = {
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: 'Dataset 1',
        data: [5, 6, 7],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
      {
        id: 2,
        label: 'Dataset 2',
        data: [3, 2, 1],
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };





    return (

        <main>
            <div className='main-container'>
                <div className='left'>
                    <section className='top-left'>
                        <h3>This section could have a chart(s) that include long-term goals, daily goals, etc.</h3>
                    </section>
                    
                    <section className='bottom-left'>
                        <h3>This could show the planned meals for the day or an area to enter in the food that has been eaten</h3>
                    </section>
                </div>

                <section className='right'>
                    <h3>This section could show workouts recently done, scheduled workouts, or other similar things</h3>
                </section>
            </div>

                <section className='consistency'>
                    <h3>This could show the consistency on a calendar</h3>
                    <Line datasetIdKey="id" data={data} options={options} />
                </section>
        </main>
    )
}