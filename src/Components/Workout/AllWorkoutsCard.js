import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getWorkouts } from '../../Actions/WorkoutActions';
import SingleWorkoutResults from "./SingleWorkoutResults";

function AllWorkoutsCard() {

  const dispatch = useDispatch()
  const workout = useSelector((state) => state)

  useEffect(() => {
    dispatch(getWorkouts())
  })

  if (typeof(workout) == "undefined") return <h1> Loading </h1>

  return (
    <div className="float-root">
        <div className="float-center">
        </div>
        <SingleWorkoutResults workout={workout} />
    </div>
  )
}

export default AllWorkoutsCard