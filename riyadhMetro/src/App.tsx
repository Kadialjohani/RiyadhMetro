import './App.css'
import {Routes, Route} from 'react-router-dom'
import Test from './pages/Test'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Test/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
