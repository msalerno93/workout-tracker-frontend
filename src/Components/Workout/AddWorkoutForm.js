
function AddWorkoutForm() {
  return (
    <div>
        <h1 className='font-bold text-blue-300 text-2xl pb-5 flex flex-col justify-center items-center '>Add Workout</h1>
            <form>
                <div className='font-bold flex flex-col justify-center items-center '>
                    <label className='text-blue-300'>
                        Title:
                        <input type="text" name="name" 
                            className="pb-2 text-black font-bold flex flex-col justify-center items-center bg-gray-400" />
                    </label>
                    <label className='text-blue-300'>
                        Date:
                        <input type="text" name="name" 
                            className="pb-2 text-black font-bold flex flex-col justify-center items-center bg-gray-400" />
                    </label>
                </div>
                <label className='text-blue-300 font-bold'>
                        Workout Notes:
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
                        placeholder="Notes about your entire Workout!!"
                        /> 
                    </label>
                    <div className="flex flex-col justify-center items-center ">
                    <input 
                        className='btn btn-primary 
                        bg-black border-blue-300 
                        hover:bg-blue-600
                        px-2 align-center'
                        type="submit" 
                        value="Create Todays Workout!" 
                    />
                    </div>
            </form>
    </div>
  )
}

export default AddWorkoutForm