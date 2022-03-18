import { useState, useEffect } from 'react';
import SingleWorkoutResults from "./SingleWorkoutResults";

function AllWorkoutsCard() {

  const API_URL = "http://[::1]:3000/api/v1/workouts";

  const [workout, setWorkout] = useState([])

  useEffect(() => {
    fetch(API_URL)
    .then(r => r.json())
    .then(data => setWorkout(data))
  }, [])



  return (
    <div className="float-root">
        <div className="float-center">
        </div>
        <SingleWorkoutResults workout={workout} />
    </div>
  )
}

export default AllWorkoutsCard