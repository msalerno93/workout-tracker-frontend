import {Link} from 'react-router-dom'


function WorkoutResults({ workout, handleDelete, exerciseDelete }) {

  if (typeof(workout) == "undefined") return <h1> Loading </h1>
  return (
    <div>
      <div>
        <div className="font-bold text-blue-300 text-2xl">{workout.title}</div>
        <div className="font-bold text-blue-300 text-m">{workout.date}</div>
        <div className="font-bold text-blue-300 text-m">
          {workout.workout_note}
        </div>
        <div className="grid-rows-2 grid-template-rows: repeat(2, minmax(0, 1fr));">
          <h5>
            {workout.exercises.map((e, id) => {
              return (
                <div key={id}>
                  <div className="shadow-2xl w-50 h-30 pt-10 pb-5">
                    Exercise Name: <div className="pb-3">{e.name}</div>
                    Muscle Group: <div className="pb-3">{e.muscle_group}</div>
                    Weight: <div className="pb-3">{e.weight} lbs</div>
                    Reps: <div className="pb-3">{e.reps}</div>
                    Sets: <div className="pb-3">{e.sets}</div>
                    Exercise Note: <div className="pb-8">{e.exercise_note}</div>
                    <button onClick={() => exerciseDelete(e.id)} className="btn btn-primary bg-red-500 border-black hover:bg-blue-600">
                      Delete
                    </button>
                    <Link to={`/workout/${workout.id}/exercise/${e.id}`}>
                    <button className="btn btn-black border-blue-300 text-white hover:bg-blue-600 mx-5">
                      Edit
                    </button>
                    </Link>

                  </div>
                </div>
              );
            })}
          </h5>
        </div>
      </div>
      <button onClick={handleDelete} className="btn btn-primary btn-lg bg-red-900 border-black hover:bg-blue-600">
        Delete Entire Workout
      </button>
    </div>
  );
}

export default WorkoutResults;
