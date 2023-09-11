import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import ManageBookings from './pages/ManageBookings'

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/signup' element={<SignUpPage/>}></Route>
      <Route path='/login' element={<LogInPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/bookings' element={<ManageBookings/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
