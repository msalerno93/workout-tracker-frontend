import {FaDumbbell} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-2xl bg-neutral text-neutral-content'>
        <div className="div container mx-auto">
            <div className="div flex-none px-2 mx-2">
                <Link to='/'>
                    <FaDumbbell className='inline pr-2 text-6xl'/>
                </Link>
                
                <Link to='/' className='text-xl font-bold align-middle'>
                    {title}
                </Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                        Home
                    </Link>
                    <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                    My Workouts
                </Link>
                </div>
            </div>
        </div>    
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Workout Tracker'
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar