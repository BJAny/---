import React, { useEffect } from 'react'
import './App.scss'

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import pkg from '../package.json'
import { AppTheme } from './theme'

import Home from './pages/Home'
import Rc from './pages/Rc'




const App: React.FC = () => {
  return (
    <AppTheme>
      <main className="text-gray-700 dark:text-gray-200 p-2">
        <div className="max-w-600px m-auto">
          <Router>
            <Routes>
              <Route path="/rc" element={<Rc />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </Router>
        </div>
      </main>
    </AppTheme>
  )
}

export default App
