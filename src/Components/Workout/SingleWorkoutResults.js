import {Link} from 'react-router-dom'
function SingleWorkoutResults({workout}) {
    return (
        <div>
           {workout.map((w) =>{
               return <div  key={w.id}>
                   <Link to={`/${w.id}`}>
                   <button className="border border-black">
                        <div className="shadow-2xl w-50 h-30 pt-3 pb-3">
                            <div className='font-bold text-blue-300 text-2xl'>{w.title}</div>
                            <div className='font-bold text-blue-300 text-m'>{w.date}</div>
                        </div>
                   </button>
                   </Link>
               </div>
           })}
       </div>
     )
}

export default SingleWorkoutResults