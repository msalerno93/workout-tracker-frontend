import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import HomePage from './Pages/HomePage'
import AddWorkoutPage from './Pages/AddWorkoutPage'
import MyWorkoutsPage from './Pages/MyWorkoutsPage'
import NotFound from './Pages/NotFoundPage'
import AboutPage from './Pages/AboutPage'
import WorkoutShowPage from './Pages/WorkoutShowPage'


function App() {

  return (
  <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/addworkout' element={<AddWorkoutPage />} />
            <Route path='/myworkouts' element={<MyWorkoutsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/:id' element={<WorkoutShowPage />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  )
}

export default App
