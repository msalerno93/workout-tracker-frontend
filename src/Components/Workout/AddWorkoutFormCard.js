import AddWorkoutForm from "./AddWorkoutForm"

function AddWorkoutFormCard() {

  const addWorkout = (newWorkout) => {
    console.log(newWorkout);
  }

  return (
    <div>
      <AddWorkoutForm handleAdd={addWorkout} />
    </div>
  )
}

export default AddWorkoutFormCard