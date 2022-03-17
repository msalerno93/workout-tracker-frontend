import AddExerciseCard from "../Components/Exercise/AddExerciseCard"
import SingleWorkoutShowCard from "../Components/Workout/SingleWorkoutShowCard"

function WorkoutShowPage({match}) {
  return (
    <div>
      <div>
        <SingleWorkoutShowCard match={match} />
      </div>
      <div>
        <AddExerciseCard />
      </div>

    </div>
  )
}

export default WorkoutShowPage