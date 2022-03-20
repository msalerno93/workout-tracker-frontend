function SingleWorkoutResults({ allWorkouts }) {

  const deleteWorkout = (id) => {
    console.log(id);
  }

  return (
    <div>
      {allWorkouts.map((w) => {
        return (
          <div key={w.id}>
            <div className="conatiner shadow-2xl">
              <div className="font-bold text-blue-300 text-2xl">{w.title}</div>
              <div className="font-bold text-blue-300 text-m">{w.date}</div>
              <div className="font-bold text-blue-300 text-m">
                {w.workout_note}
              </div>
              <button onClick={() => deleteWorkout(w.id)}
                className="btn btn-primary bg-red-500 border-black 
                hover:bg-blue-600 mt-5"
              >
                Delete Entire Workout
              </button>
            </div>
            {w.exercises.map((e) => {
              return (
                <div key={e.id}>
                  <div className="shadow-2xl w-50 h-30 pt-10 pb-5">
                    Exercise Name: <div className="pb-3">{e.name}</div>
                    Muscle Group: <div className="pb-3">{e.muscle_group}</div>
                    Weight: <div className="pb-3">{e.weight}</div>
                    Reps: <div className="pb-3">{e.reps}</div>
                    Sets: <div className="pb-3">{e.sets}</div>
                    Exercise Note: <div className="pb-8">{e.exercise_note}</div>
                    <button className="btn btn-primary bg-red-500 border-black hover:bg-blue-600">
                      Delete
                    </button>
                    <button className="btn btn-black border-blue-300 text-white hover:bg-blue-600 mx-5">
                      Edit
                    </button>
                    <button className="btn btn-black border-blue-300 text-white hover:bg-blue-600 mx-1">
                      Add Exercise
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// const deleteWorkout = (w.id) => {
//   console.log(w.id)
// }

export default SingleWorkoutResults;
