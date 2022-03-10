import AddExercise from "../Components/Workout/AddExerciseForm"
import AddWorkoutForm from "../Components/Workout/AddWorkoutForm"

function AddWorkoutPage() {
  return (
    <div className='float-root'>
      <div className='float-left'>
        <AddWorkoutForm className='container max-width: 768px' />
      </div>

      <div className='float-right'>
          <AddExercise />
      </div>
    </div>
  )
}

export default AddWorkoutPage