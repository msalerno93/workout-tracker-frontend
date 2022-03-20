import { useParams } from "react-router-dom";
import AddExerciseForm from "./AddExerciseForm";

function AddExercise() {
  const params = useParams();

  const singleExercise = (newExercise) => {
    const API_URL = `http://[::1]:3000/api/v1/workouts/${params.id}/exercises`;
    fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(newExercise),
    })
      .then((r) => r.json())
      .then((json) => console.log(json));
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
