import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
  // Link
} from 'react-router-dom'

import { useState } from 'react'
import './App.css'
import CardSearch from './pages/CardSearch'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RaceNavigation from './pages/RaceNavigation'
import Calendar from './pages/Calendar'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='flex flex-col h-full' style={{ minHeight: '100vh' }}>
        <Navbar />
        <div className='flex flex-col items-center flex-grow'>

          <div className="max-w-7xl px-2 pt-2 pb-8 sm:px-6 lg:px-8 w-full">

            <h1 className="tm-title-1 mb-2">
              Yu-Gi-Oh
            </h1>


            <Routes>
              {
                <>
                  <Route path="/" element={<CardSearch />} />
                  <Route path="/race-navigation" element={<RaceNavigation />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/calendar" element={<Calendar />} />
                  {/* <Route path="/task-list/:id?" element={<TaskList />} />
                  <Route path="/task-list/:taskListId/task/:taskId" element={<Task />} /> */}
                </>
              }
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
