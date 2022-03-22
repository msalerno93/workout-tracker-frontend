import EditExerciseForm from "../Components/Exercise/EditExerciseForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditExercisePage() {
  const params = useParams();

  const API_URL = `http://[::1]:3000/api/v1/workouts/${params.wid}/exercises/${params.id}`;

  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setExercise(data));
  }, []);

  const editEntireExercise = (formData) => {
    const API_URL = `http://[::1]:3000/api/v1/workouts/${params.wid}/exercises/${params.id}`;
    fetch(API_URL, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
      <div>
        <EditExerciseForm
          editEntireExercise={editEntireExercise}
          exercise={exercise}
        />
      </div>
    </div>
  );
}

export default EditExercisePage;
