import { useState } from "react";

function AddExerciseForm({handleAddExercise}) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [muscle_group, setMuscleGroup] = useState("");

  const handleMuscleGroupChange = (e) => {
    setMuscleGroup(e.target.value);
  };

  const [sets, setSets] = useState("");

  const handleSetsChange = (e) => {
    setSets(e.target.value);
  };

  const [reps, setReps] = useState("");

  const handleRepChange = (e) => {
    setReps(e.target.value);
  };
  const [weight, setWeight] = useState("");

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const [exercise_note, setExerciseNote] = useState("");

  const handleExerciseNote = (e) => {
    setExerciseNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length > 5) {
      const singleExercise = {
        name,
        muscle_group,
        reps,
        sets,
        weight,
        exercise_note,
      };

      handleAddExercise(singleExercise);

      setName("");
      setMuscleGroup("");
      setSets("");
      setReps("");
      setWeight("");
      setExerciseNote("");
    }
  };

  return (
    <div>
      <h1 className="font-bold text-blue-300 text-2xl pb-5 flex flex-col justify-center items-center ">
        Add Exercise
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="font-bold flex flex-col justify-center items-center ">
          <label className="text-blue-300">
            <div className="text-blue-300 text-bolder">Workout Name:</div>
            <input
              type="text"
              name="name"
              className="pb-2 text-black font-bold flex flex-col 
                        justify-center items-center bg-gray-400"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label className="text-blue-300">
            Muscle Group:
            <input
              type="text"
              name="name"
              className="pb-2 text-black font-bold flex flex-col justify-center 
                        items-center bg-gray-400"
              value={muscle_group}
              onChange={handleMuscleGroupChange}
            />
          </label>
          <label className="text-blue-300">
            Weight:
            <input
              type="text"
              name="name"
              className="pb-2 text-black font-bold flex flex-col justify-center 
                        items-center bg-gray-400"
              value={weight}
              onChange={handleWeightChange}
            />
          </label>
          <label className="text-blue-300">
            Sets:
            <input
              type="text"
              name="name"
              className="pb-2 text-black font-bold flex flex-col justify-center 
                        items-center bg-gray-400"
              value={sets}
              onChange={handleSetsChange}
            />
          </label>
          <label className="text-blue-300">
            Reps:
            <input
              type="text"
              name="name"
              className="pb-2 text-black font-bold flex flex-col justify-center 
                        items-center bg-gray-400"
              value={reps}
              onChange={handleRepChange}
            />
          </label>
          <label className="text-blue-300">
            Exercise Notes:
            <textarea
              className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        text-black
                        font-bold
                        bg-gray-400
                        rounded
                        transition
                        ease-in-out
                        m-0
                    "
              rows="3"
              cols="40"
              placeholder="Notes about your excercise!"
              value={exercise_note}
              onChange={handleExerciseNote}
            />
          </label>
          <input
            className="btn btn-primary 
                    bg-black border-blue-300 
                    hover:bg-blue-600
                    px-2"
            type="submit"
            value="Create Exercise!"
          />
        </div>
      </form>
    </div>
  );
}

export default AddExerciseForm;
