import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContactoForm } from './components/Fianzas/Landing/ContactoForm'
import { ChatWindow } from './components/Fianzas/Landing/ChatWindow'
import ScrollToTop from './components/Fianzas/Landing/ScrollToTop'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <ScrollToTop />
      <App />
      <ContactoForm />
      <ChatWindow />
    </BrowserRouter>
  </React.StrictMode>
)
