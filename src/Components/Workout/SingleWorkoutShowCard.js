import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WorkoutResults from "./WorkoutResults";

function SingleWorkoutShowCard() {
  const params = useParams();

  const [singleWorkout, setSingleWorkout] = useState([]);

  useEffect(() => {
    const API_URL = `http://[::1]:3000/api/v1/workouts/${params.id}`

    fetch(API_URL)
      .then((r) => r.json())
      .then((json) => setSingleWorkout(json))
  }, [params]);


  const deleteEntireWorkout = () => {
    const API_URL = `http://[::1]:3000/api/v1/workouts/${params.id}`
    fetch(API_URL, {method: "DELETE"
    })
  };

  const deleteEntireExercise = (exerciseId) => {
    const API_URL = `http://[::1]:3000/api/v1/workouts/${params.id}/exercises/${exerciseId}`
    fetch(API_URL, {method: "DELETE"
    })
  };
  
  return (
    <>
      {
        <div className="float">
          <div className="float-left">
            <div>
              <WorkoutResults workout={singleWorkout} 
              handleDelete={deleteEntireWorkout} 
              exerciseDelete={deleteEntireExercise}
              />
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default SingleWorkoutShowCard;
