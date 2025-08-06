import { useState } from 'react';
import './main-section.css'
import Weekly from '/src/components/Weekly/Weekly';

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required components
ChartJS.register( LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend );


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


    const [currentView, setCurrentView] = useState('fitness')

    const toggleView = () => {
        setCurrentView((prev) => (prev === 'fitness' ? 'nutrition' : 'fitness'))
    }



    return (


        <main>
            <div className='main-container'>
                <div className='left'>
                    <section className='top-left'>
                        <p>This section could have a chart(s) that include long-term goals, daily goals, etc.</p>
                    </section>
                    
                    <section className='bottom-left'>
                      <ul>
                        <h4>Daily Achievments or Enter in food for the day</h4>
                        <li>This could show the planned meals for the day or an area to enter in the food that has been eaten</li>
                        <li>Form to enter in food and water that have been eaten/drank today</li>
                        <li>Show the splits on the day for calories/macros and total water consumed</li>
                      </ul>
                    </section>
                </div>

                <Weekly 
                  currentView={currentView}
                  onToggle={toggleView}
                />

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