import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleWorkoutShowCard() {
  const params = useParams();

  const [singleWorkout, setSingleWorkout] = useState([]);

  useEffect(() => {
    const API_URL = `http://[::1]:3000/api/v1/workouts/${params.id}`

    fetch(API_URL)
      .then((r) => r.json())
      .then((json) => setSingleWorkout(json))
  }, [params]);

  return (
    <>
      {
        <div className="float">
          <div className="float-left">
            <div>
              {params.id}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default SingleWorkoutShowCard;
