import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar.tsx'
import Layout from '../components/Layout/Layout.tsx'

function ProtectedRoute() {
   const localStorageItem = localStorage.getItem("loggedIn");
   const userId = localStorage.getItem("userId");
   let loggedIn =  false
   if (localStorageItem) {
      if (localStorageItem === 'true') loggedIn = true
      if (localStorageItem === 'false') loggedIn = false
   }
   
   if (loggedIn && userId) {
      return (
         <div className="container">
            <Navbar />
            <Layout>
               <Outlet />
            </Layout>
         </div>
      )
   }
   return <Navigate to={'/login'} />
}

export default ProtectedRoute