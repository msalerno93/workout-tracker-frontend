import EditExerciseForm from "../Components/Exercise/EditExerciseForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { editEntireExercise, getWorkouts } from "../Actions/WorkoutActions";

function EditExercisePage() {
  const params = useParams();

  const dispatch = useDispatch();

  const exercise = useSelector( state => {
    console.log(params)
    if (typeof(state) !== 'undefined') {
      let workout = state.find(workout => workout.id == params.wid)
      return workout.exercises.find(ex => ex.id == params.id)
    }
  })

  // const API_URL = `http://[::1]:3000/api/v1/workouts/${params.wid}/exercises/${params.id}`;
  
  useEffect(() => {
    dispatch(getWorkouts())
  }, []);

  const editExercise = (formData) => {
    console.log('i love big titties')
    dispatch(editEntireExercise(formData, params.wid, params.id))
  }

  if (typeof(exercise) === "undefined") return <h1> Loading </h1>

  return (
    <div>
      <div>
        <EditExerciseForm
          editEntireExercise={editExercise}
          exercise={exercise}
        />
      </div>
    </div>
  );
}

export default EditExercisePage;
