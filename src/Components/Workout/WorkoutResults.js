function WorkoutResults({workout}) {

    return (
        <div>
           <h1>These are Workouts API ALL WORKOUTS YOUVE DONE</h1>
           {workout.map((w) =>{
               return <div key={w.id}>
                   <h3>{w.exercise}</h3>    
               </div>
           })}
       </div>
     )
}


export default WorkoutResults