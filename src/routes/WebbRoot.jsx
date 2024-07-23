
import { NavLink, Outlet } from 'react-router-dom'
import '../App.css'
import LandingPage from '../components/LanginPage'

function WebbRoot() {
  

  return (
    <>
    <header className='header'> 
    <NavLink className="navlink" to= "/cv" >CV </NavLink>
    <NavLink className="navlink" to= "/"> Linda Westerlund</NavLink>
    <NavLink className="navlink" to= "/projekt" >Projekt</NavLink>
    </header>
    <div className='body'>
    <Outlet/>
    
    </div>
    
    </>
  )
}

export default WebbRoot
