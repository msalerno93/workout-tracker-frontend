import AddWorkoutForm from "./AddWorkoutForm";

function AddWorkoutFormCard() {
  const addWorkout = (newWorkout) => {
    const API_URL = `http://[::1]:3000/api/v1/workouts`;
    fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(newWorkout),
    })
      .then((r) => r.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <AddWorkoutForm handleAdd={addWorkout} />
    </div>
  );
}

export default AddWorkoutFormCard;
