import {Route, Routes} from 'react-router-dom'
// import {connect} from 'react-redux'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import HomePage from './Pages/HomePage'
import AddWorkoutPage from './Pages/AddWorkoutPage'
import MyWorkoutsPage from './Pages/MyWorkoutsPage'
import NotFound from './Pages/NotFoundPage'
import AboutPage from './Pages/AboutPage'
import WorkoutShowPage from './Pages/WorkoutShowPage'
import EditExercisePage from './Pages/EditExercisePage'


function App() {

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/addworkout' element={<AddWorkoutPage />} />
            <Route path='/myworkouts' element={<MyWorkoutsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/workout/:id' element={<WorkoutShowPage />} />
            <Route path='/workout/:wid/exercise/:id' element={<EditExercisePage/>} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

// function mapStateToProps(state) {
  // return object that will be merged with my props
  
// }

// ^^ make export default connect(mapStateToProps)(App)
// return value is a function - passing App in as argument


// editEntireExercise={editEntireExercise}