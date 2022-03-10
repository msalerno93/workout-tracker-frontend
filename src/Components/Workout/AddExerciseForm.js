function AddExerciseForm() {
  return (
<div>
    <h1 className='font-bold text-blue-300 text-2xl pb-5 flex flex-col justify-center items-center '>Add Exercise</h1>
        <form>
            <div className='font-bold flex flex-col justify-center items-center '>
                <label className='text-blue-300'>
                    <div className="text-blue-300 text-bolder">
                    Workout Name:
                    </div>
                    <input type="text" name="name" 
                        className="pb-2 text-black font-bold flex flex-col justify-center items-center bg-gray-400" />
                </label>
                <label className='text-blue-300'>
                    Muscle Group:
                    <input type="text" name="name" 
                        className="pb-2 text-black font-bold flex flex-col justify-center items-center bg-gray-400" />
                </label>
                <label className='text-blue-300'>
                    Weight:
                    <input type="text" name="name" 
                        className="pb-2 text-black font-bold flex flex-col justify-center items-center bg-gray-400" />
                </label>
                <label className='text-blue-300'>
                    Sets:
                    <input type="text" name="name"
                        className="pb-2 text-black font-bold flex flex-col justify-center items-center bg-gray-400" />
                </label>
                <label className='text-blue-300'>
                    Reps:
                    <input type="text" name="name" 
                        className="pb-2 text-black font-bold flex flex-col justify-center items-center bg-gray-400" />
                </label>  
                <label className='text-blue-300'>
                    Exercise Notes:
                    <textarea
                    class="
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
                    cols='40'
                    placeholder="Notes about your excercise!"
                    /> 
                </label>
                <input 
                    className='btn btn-primary 
                    bg-black border-blue-300 
                    hover:bg-blue-600
                    px-2'
                    type="submit" 
                    value="Create Exercise!" 
                />
            </div>
        </form>
    </div>
  )
}

export default AddExerciseForm