import SingleWorkoutResults from "./SingleWorkoutResults";
import AddExerciseCard from "../Exercise/AddExerciseCard";

function AllWorkoutsCard({ allWorkout }) {
  const allWorkouts = allWorkout;

  return (
    <div className="float-root">
      <div className="float-left">
        <SingleWorkoutResults allWorkouts={allWorkouts} />
      </div>

      <div className="float-right">
        <AddExerciseCard />
      </div>
    </div>
  );
}

export default AllWorkoutsCard;
