import WorkoutResults from '../Components/Workout/WorkoutResults'
import { useState, useEffect } from 'react';

const API_URL = "http://[::1]:3000/api/v1/workouts";


function MyWorkout() {

  const [workout, setWorkout] = useState([])

  useEffect(() => {
    fetch(API_URL)
    .then(r => r.json())
    .then(data => setWorkout(data))
  }, [])

  console.log(workout);

  return (
    <div>
      <WorkoutResults workout={workout} />
    </div>
  )
}

export default MyWorkout