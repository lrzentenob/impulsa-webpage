import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContactoForm } from './components/Fianzas/Landing/ContactoForm'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ContactoForm />
    </BrowserRouter>
  </React.StrictMode>
)
