import WorkoutResults from '../Components/Workout/WorkoutResults'
import axios from 'axios'
import { useState, useEffect } from 'react';

const API_URL = "http://[::1]:3000/api/v1/workouts";

function getWorkoutData() {
  return axios.get(API_URL).then((response => response.data))
}

function MyWorkout() {

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getWorkoutData().then((data) => {
      if (mounted) {
        setWorkouts(data);
      }
    });
    return () => (mounted = false); 
  }, [])

  return (
    <div>
      <WorkoutResults workouts={workouts} />
    </div>
  )
}

export default MyWorkout