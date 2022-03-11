function WorkoutResults(props) {

    return (
        <div>
           <h1>These are Workouts API</h1>
           {props.workouts.map((workout) =>{
               return <div key={workout.id}>
                   <h3>{workout.title}</h3>    
               </div>
           })}
       </div>
     )
}


export default WorkoutResults