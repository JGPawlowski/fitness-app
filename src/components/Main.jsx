import '../styles/main.css'

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
                  <h3 style={{textDecoration: 'underline'}}>Weekly stats</h3>
                  <p>This section could show workouts recently done, scheduled workouts, or other similar things</p>
                  <p>Have an arrow button to scroll through different sections of stats for the week</p>
                  <ul>
                    <li>Averagedaily calories and macros for the week</li>
                    <li>Workouts done during the week and stats on those</li>
                    <li>Other things that have been logged</li>
                  </ul>
                </section>
            </div>

                <section className='consistency'>
                    <h3>This could show the consistency on a calendar</h3>
                    <Line datasetIdKey="id" data={data} options={options} />
                </section>
        </main>
    )
}









/*
const [foodQuery, setFoodQuery] = useState('');
const [foodResults, setFoodResults] = useState(null);

const [exerciseQuery, setExerciseQuery] = useState('');
const [exerciseResults, setExerciseResults] = useState(null);

const [totalCaloriesIn, setTotalCaloriesIn] = useState(0);
const [totalCaloriesOut, setTotalCaloriesOut] = useState(0);

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);



const inputRef = useRef(); // DOM reference
const isFirstRender = useRef(true); // flag to avoid first useEffect
const previousTotalCalories = useRef(0); // compare current and previous



useEffect(() => {
  if (!foodQuery) return;

  const fetchFoodData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`API_URL?q=${foodQuery}`);
      const data = await res.json();
      setFoodResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchFoodData();
}, [foodQuery]);








// 1. useRef to focus input
useEffect(() => {
  inputRef.current.focus();
}, []);

// 2. useState for user input
<input ref={inputRef} value={foodQuery} onChange={e => setFoodQuery(e.target.value)} />

// 3. useEffect to fetch data on input change
useEffect(() => {
  if (!foodQuery) return;

  const timeout = setTimeout(() => {
    fetchCaloriesFromFood(foodQuery);
  }, 500); // debounce

  return () => clearTimeout(timeout);
}, [foodQuery]);



*/ 