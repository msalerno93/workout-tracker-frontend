function WorkoutResults({workout}) {

    return (
        <div>
           <h1>These are Workouts API ALL WORKOUTS YOUVE DONE</h1>
           {workout.map((w) =>{
               return <div key={w.id}>
                   <h3>{w.title}</h3>
                   <h5>{w.date}</h5>
                   <h5>{w.workout_note}</h5>
               </div>
           })}
       </div>
     )
}


export default WorkoutResults