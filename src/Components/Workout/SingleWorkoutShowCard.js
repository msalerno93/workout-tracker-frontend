import {useSelector, useDispatch} from 'react-redux'
import { useParams } from "react-router-dom";
import WorkoutResults from "./WorkoutResults";
import { useEffect, useState } from "react";
import { deleteWorkout, getWorkouts, deleteEntireExercise } from "../../Actions/WorkoutActions";

function SingleWorkoutShowCard() {
  const params = useParams();

  const dispatch = useDispatch()
  const singleWorkout = useSelector((state) => {
    
    // if (typeof(state) !== "undefined") {
      return state.find(workout => workout.id == params.id)
    // }
  })
  // if (typeof(workout) === "undefined") return <h1> Loading </h1>

  useEffect(() => {
    dispatch(getWorkouts())
  }, []);

  const deleteEntireWorkout = (workouts) => {
    dispatch(deleteWorkout(workouts))
  };

  const deleteExercise = (exerciseId) => {
    // const API_URL = `http://[::1]:3000/api/v1/workouts/${params.id}/exercises/${exerciseId}`
    // fetch(API_URL, {method: "DELETE"
    // })
    dispatch(deleteEntireExercise(params.id, exerciseId))
  };

  return (
    <>
      {
        <div className="float">
          <div className="float-left">
            <div>
              <WorkoutResults workout={singleWorkout} 
              deleteEntireWorkout={deleteEntireWorkout} 
              exerciseDelete={deleteExercise}
              />
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default SingleWorkoutShowCard;
