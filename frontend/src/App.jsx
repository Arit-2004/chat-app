import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="bg-[url(./src/assets/bgImage.svg)]
  bg-contain">
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='login' element={<LoginPage/>}/>
       <Route path='profile' element={<ProfilePage/>}/>
    </Routes>
  </div>
  )
}

export default App
