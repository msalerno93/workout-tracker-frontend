import {Link} from 'react-router-dom'

function SingleWorkoutResults({workout}) {

    if (workout.length === 0) return <h1>You have no Workouts!</h1>
    return (
        <div className='container max-width: 640px'>
           {workout.map((w) =>{
               return <div  key={w.id} >
                   <Link to={`/workout/${w.id}`} >
                            <div className="shadow-2xl pt-3 pb-3">
                                <div className='font-bold text-blue-300 text-2xl'>{w.title}</div>
                                <div className='font-bold text-blue-300 text-m'>{w.date}</div>
                            </div>
                   </Link>
               </div>
           })}
       </div>
     )
}

export default SingleWorkoutResults