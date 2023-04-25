
import { Routes, Route, Link } from 'react-router-dom';
import { Fianzas } from './pages/Fianzas/Fianzas';

function App() {
  return ( 
      <Routes>
        <Route path="/" element={<Fianzas />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
)
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Sition en construccion!</h2>
      <p>
        <Link to="/">Regresar al inicio</Link>
      </p>
    </div>
  );
}
export default App
