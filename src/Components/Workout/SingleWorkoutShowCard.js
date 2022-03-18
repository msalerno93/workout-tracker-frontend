import { useState, useEffect } from 'react';
import WorkoutResults from './WorkoutResults';


function SingleWorkoutShowCard({match}) {

  const API_URL = `http://[::1]:3000/api/v1/workouts/${match.params.id}`;

  const [workout, setWorkout] = useState([])

  console.log(match.params);

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