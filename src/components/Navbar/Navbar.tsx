import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logOut from '../../assets/logout.png'

function Navbar() {

   const logoutFunction = () => {
      localStorage.setItem("loggedIn", 'false')
      localStorage.removeItem("userId")
   }

   return (
      <header className='navbar'>
         <nav className="navbar-box">
            <NavLink to='/' className='link'>Home</NavLink>
            <NavLink to='/data' className='link'>DataGrid</NavLink>
         </nav>
         <div className='navbar-left'>
            <div className='logo'>
               A
            </div>
            <div className='logout'>
               <NavLink to='/login' onClick={logoutFunction} className='link'>
                  <img src={logOut} className='img' alt="logout" />
                  Logout
               </NavLink>
            </div>
         </div>

      </header>
   )
}
export default Navbar
