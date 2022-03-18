import AddWorkoutForm from "./AddWorkoutForm"

function AddWorkoutFormCard() {

  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
  }

  return (
    <div>
      <AddWorkoutForm handleAdd={addFeedback} />
    </div>
  )
}

export default AddWorkoutFormCard