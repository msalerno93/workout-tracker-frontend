import WorkoutResults from "./WorkoutResults"
import { useState, useEffect } from 'react';


const API_URL = "http://[::1]:3000/api/v1/workouts";


function AllWorkoutsCard() {

    const [workout, setWorkout] = useState([])

    useEffect(() => {
      fetch(API_URL)
      .then(r => r.json())
      .then(data => setWorkout(data))
    }, [])

  return (
    <div className="float-root">
        <div className="float-center">
            <WorkoutResults workout={workout} />
        </div>

    </div>
  )
}

export default AllWorkoutsCard