import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { useState } from 'react'
import './App.css'
import FavoriteBookPage from './pages/FavoriteBookPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='flex flex-col h-full' style={{ minHeight: '100vh' }}>
        <Navbar />
        <div className='flex flex-col items-center flex-grow'>

          <div className="max-w-7xl px-4 pt-2 pb-8 sm:px-6 lg:px-8 w-full">

            <h1 className="tm-title-1 mb-2">
              Favorite Books
            </h1>


            <Routes>
              {
                <>
                  <Route path="/" element={<FavoriteBookPage />} />
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
