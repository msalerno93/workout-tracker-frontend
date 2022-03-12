function WorkoutResults({workouts}) {

    return (
        <div>
           <h1>These are Workouts API ALL WORKOUTS YOUVE DONE</h1>
           {workouts.map((workout) =>{
               return <div key={workout.id}>
                   <h3>{workout.title}</h3>    
               </div>
           })}
       </div>
     )
}


export default WorkoutResults