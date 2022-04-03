import AddWorkoutForm from "./AddWorkoutForm";
import { addWorkout } from "../../Actions/WorkoutActions";
import {useDispatch} from "react-redux"

function AddWorkoutFormCard() {

  const dispatch = useDispatch()

  const test = (test) => {
    console.log('hitting')
    dispatch(addWorkout(test))
  }
  return (
    <div>
      <AddWorkoutForm handleAdd={test} />
    </div>
  );
}

export default AddWorkoutFormCard;
