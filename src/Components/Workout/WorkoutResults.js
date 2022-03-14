function WorkoutResults({workout}) {

    return (
        <div>
           <h1>These are Workouts API ALL WORKOUTS YOUVE DONE</h1>
           {workout.map((w) =>{
               return <div key={w.id}>
                   <h3>{w.title}</h3>
                   <h5>{w.date}</h5>
                   <h5>{w.exercises.map((e) =>{
                       return <div key={e.id}>
                           <h3>{e.name}</h3>
                           <h3>{e.muscle_group}</h3>
                           <h3>{e.weight}</h3>
                           <h3>{e.reps}</h3>
                           <h3>{e.sets}</h3>
                           <h3>{e.exercise_note}</h3>
                       </div>
                   })}</h5>
               </div>
           })}
       </div>
     )
}


export default WorkoutResults