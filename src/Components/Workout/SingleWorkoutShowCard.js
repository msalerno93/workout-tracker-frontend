import { useState, useEffect } from 'react';
import WorkoutResults from './WorkoutResults';


function SingleWorkoutShowCard() {

  const API_URL = "http://[::1]:3000/api/v1/workouts";

  const [workout, setWorkout] = useState([])


  useEffect(() => {
    fetch(API_URL)
    .then(r => r.json())
    .then(data => setWorkout(data))
  }, [])

  return (

    <div className="float">
        <div className="float-left">
                <WorkoutResults workout={workout}/>
        </div>
    </div>
  )
}

export default SingleWorkoutShowCard