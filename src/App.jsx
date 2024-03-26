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
import Page1 from './pages/Page1'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'

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
                  <Route path="/" element={<Page1 />} />
                  <Route path="/page2" element={<Page2 />} />
                  <Route path="/page3" element={<Page3 />} />
                  <Route path="/page4" element={<Page4 />} />
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
