import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './components/Homepage.jsx'
import LoadingPage from './components/LoadingPage.jsx'
import GuidePage from './components/GuidePage.jsx'
import GamePage from './components/GamePage.jsx'
import GameOverPage from './components/GameOverPage.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import { charContext, CharProvider } from './context/charContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CharProvider value = {charContext._currentValue}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<App />}>
              <Route path='/' element={<Homepage />} />
              <Route path='/home' element={<Homepage />} />
              <Route path='/loading' element={<LoadingPage />} />
              <Route path='/guide/:id' element={<GuidePage />} />
              <Route path='/game/:id' element={<GamePage />} />
              <Route path='/gameover' element={<GameOverPage />} />
              <Route path='/leaderboard' element={<Leaderboard />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </CharProvider>
  </StrictMode>,
)

