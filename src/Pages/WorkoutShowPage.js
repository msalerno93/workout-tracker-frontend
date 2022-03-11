import AddExerciseCard from "../Components/Exercise/AddExerciseCard"
import WorkoutShowCard from "../Components/Workout/WorkoutShowCard"

function WorkoutShowPage() {
  return (
    <div>
      <div>
        <WorkoutShowCard />
      </div>
      <div>
        <AddExerciseCard />
      </div>

    </div>
  )
}

export default WorkoutShowPage