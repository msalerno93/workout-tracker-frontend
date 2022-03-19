import { useParams } from "react-router-dom"
import AddExerciseCard from "../Components/Exercise/AddExerciseCard"
import SingleWorkoutShowCard from "../Components/Workout/SingleWorkoutShowCard"

function WorkoutShowPage() {
  return (
    <div>
      <div>
        <SingleWorkoutShowCard />
      </div>
      <div>
        <AddExerciseCard />
      </div>

    </div>
  )
}

export default WorkoutShowPage