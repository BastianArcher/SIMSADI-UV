import { BrowserRouter, Routes, Route } from 'react-router'
import RouteProtection from 'utils/RouteProtection'
import LandingPage from 'pages/LandingPage'
import Glosary from 'pages/Glosary'
import Menu from 'pages/Menu'
import FHIR from 'pages/Fhir'
import Terminology from 'pages/Terminology'
import Bahmni from 'pages/Bahmni'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/glosario" element={<Glosary />} />
          <Route path="/menu" element={<RouteProtection><Menu/></RouteProtection>} />
          <Route path="/menu/fhir" element={<RouteProtection><FHIR/></RouteProtection>} />
          <Route path="/menu/terminology" element={<RouteProtection><Terminology/></RouteProtection>} />
          <Route path="/menu/bahmni" element={<RouteProtection><Bahmni/></RouteProtection>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
