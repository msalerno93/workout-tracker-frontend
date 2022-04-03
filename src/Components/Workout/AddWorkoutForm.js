import { useState } from "react";
import {useNavigate} from "react-router"

function AddWorkoutForm({ handleAdd }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate()  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const [workout_note, setWorkoutNote] = useState("");

  const handleWorkoutNoteChange = (e) => {
    setWorkoutNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length > 5) {
      const newFeedback = {
        title,
        date,
        workout_note,
      };

      handleAdd(newFeedback);

      setTitle("");
      setDate("");
      setWorkoutNote("");

      
      navigate('/myworkouts')
    }
  };

  return (
    <div>
      <h1 className="font-bold text-blue-300 text-2xl pb-5 flex flex-col justify-center items-center ">
        Add Workout
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="font-bold flex flex-col justify-center items-center ">
          <label className="text-blue-300">
            Title:
            <input
              onChange={handleTitleChange}
              className="pb-2 text-black font-bold flex 
                                flex-col justify-center items-center bg-gray-400"
              value={title}
            />
          </label>
          <label className="text-blue-300">
            Date:
            <input
              onChange={handleDateChange}
              type="text"
              className="pb-2 text-black font-bold flex flex-col 
                                justify-center items-center bg-gray-400"
              value={date}
            />
          </label>
        </div>
        <label className="text-blue-300 font-bold">
          Workout Notes:
          <textarea
            onChange={handleWorkoutNoteChange}
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
            value={workout_note}
          />
        </label>
        <div className="flex flex-col justify-center items-center ">
          <input
            className="btn btn-primary 
                        bg-black border-blue-300 
                        hover:bg-blue-600
                        px-2 align-center"
            type="submit"
            value="Create Todays Workout!"
          />
        </div>
      </form>
    </div>
  );
}

export default AddWorkoutForm;
