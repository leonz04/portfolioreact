import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import GeneralNav from './components/shared/GeneralNav.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <GeneralNav/>
    <App />
    </HashRouter>
  </React.StrictMode>,
)
