
import { NavLink, Outlet } from 'react-router-dom'
import '../App.css'
import LandingPage from '../components/LanginPage'

function WebbRoot() {
  
/* Kolla upp: window.navigator.userAgent  */


  return (
    <>
    <header className='header'> 
      <div className='header-div'>
    <NavLink className="navlink" to= "/cv" >CV </NavLink> {/* Add state som håller koll på vilken länk som är aktiv och ändra i CSS en. */ }
    <NavLink className="navlink" to= "/"> Linda Westerlund</NavLink>
    <NavLink className="navlink" to= "/projekt" >Projekt</NavLink>
        
      </div>
    </header>
    <div className='body'>
    <Outlet/>
    
    </div>
    
    </>
  )
}

export default WebbRoot
