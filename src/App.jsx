import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import RegForm from './components/RegForm'
import Navbar from './components/Navbar'
import ChristTable from './components/ChristTable'
import { Route, Routes } from 'react-router-dom'
import StateBases from './components/StateBases'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<First/>}></Route>
      <Route path="/r" element={<Navbar/>}></Route>
      <Route path="/c" element={<RegForm/>}></Route>
      <Route path="/s" element={<Task/>}></Route>

    </Routes>

    </>
  )
}

export default App