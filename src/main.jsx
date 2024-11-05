import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
//import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import RentalGrid from './components/RentalGrid.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <RentalGrid />
  </StrictMode>,
)
