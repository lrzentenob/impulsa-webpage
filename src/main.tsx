import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { ContactoForm } from './components/Fianzas/Landing/ContactoForm'
import ScrollToTop from './components/Fianzas/Landing/ScrollToTop'
import { BackgroundImages } from './components/Fianzas/Landing/BackgroundImages'
import { ModalHome } from './components/Fianzas/Landing/ModalHome'


const AppWithLanding = () => {
  const location = useLocation(); // Obtén la ruta actual

  // Define las rutas en las que NO quieres mostrar el ModalHome
  const hideModalOnPaths = ['/fianzas/cotizacion'];

  // Si la ruta actual está en las que queremos ocultar el ModalHome, no lo renderizamos
  if (hideModalOnPaths.includes(location.pathname)) {
    return (
      <React.StrictMode>
        <ScrollToTop />
        <App />
        <ContactoForm />
        <BackgroundImages />
      </React.StrictMode>
    );
  }

  // Si no estamos en una ruta específica, renderizamos el ModalHome
  return (
    <React.StrictMode>
      <ScrollToTop />
      <App />
      <ContactoForm />
      <BackgroundImages />
      <ModalHome />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppWithLanding />
  </BrowserRouter>
);



/* ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <ScrollToTop />
      <App />
      <ContactoForm />
      <BackgroundImages />
      <ModalHome />
    </BrowserRouter>
  </React.StrictMode>
) */
