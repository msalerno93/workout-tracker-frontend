import { useParams } from "react-router-dom";
import AddExerciseForm from "./AddExerciseForm";
import { addExercise } from "../../Actions/WorkoutActions";
import { useDispatch} from 'react-redux'

function AddExercise() {
  const params = useParams();
  const dispatch = useDispatch()

  const singleExercise = (newExercise) => {
    dispatch(addExercise(newExercise, params.id))
  };

  return (
    <div className="float-root">
      <div className="float-right">
        <AddExerciseForm handleAddExercise={singleExercise} />
      </div>
    </div>
  );
}

export default AddExercise;
