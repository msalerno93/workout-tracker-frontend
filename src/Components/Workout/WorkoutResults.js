// function WorkoutResults({workout}) {

//     return (
//         <div>
//            {workout.map((w) =>{
//                return <div  key={w.id}>
//                    <div className='font-bold text-blue-300 text-2xl'>{w.title}</div>
//                    <div className='font-bold text-blue-300 text-m'>{w.date}</div>
//                    <div className='font-bold text-blue-300 text-m'>{w.workout_note}</div>
//                    <div className="grid-rows-2 grid-template-rows: repeat(2, minmax(0, 1fr));">
//                         <h5>{w.exercises.map((e) =>{
//                             return <div key={e.id}>
//                                         <div className="shadow-2xl w-50 h-30 pt-10 pb-5">
//                                             Exercise Name: <div className='pb-3'>{e.name}</div>
//                                             Muscle Group: <div className='pb-3'>{e.muscle_group}</div>
//                                             Weight: <div className='pb-3'>{e.weight}</div>
//                                             Reps: <div className='pb-3'>{e.reps}</div>
//                                             Sets: <div className='pb-3'>{e.sets}</div>
//                                             Exercise Note: <div className='pb-8'>{e.exercise_note}</div>
//                                             <button className='btn btn-primary bg-red-500 border-black hover:bg-blue-600'>Delete</button>
//                                             <button className='btn btn-black border-blue-300 text-white hover:bg-blue-600 mx-5'>Edit</button>
//                                         </div>
//                                 </div>
//                         })}</h5>
//                    </div>
//                </div>
//            })}
//            <button className='btn btn-primary bg-red-900 border-black hover:bg-blue-600'>Delete Entire Workout</button>
//        </div>
//      )
// }


// export default WorkoutResults