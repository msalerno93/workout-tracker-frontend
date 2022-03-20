import AllWorkoutsCard from "../Components/Workout/AllWorkoutsCard"

function MyWorkout({workout}) {

  const allWorkout = workout

  return (
    <div>
      <AllWorkoutsCard allWorkout={allWorkout}/>
    </div>
  )
}

export default MyWorkout