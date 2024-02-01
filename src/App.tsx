// import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Authiorization/Authiorization.tsx';
import ProtectedRoute from './Routes/ProtectedRoute';
import DataGrid from './pages/DataGrid/DataGrid.tsx';

function App() {

  return (
    <div className="app-background">
      <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/data' element={<DataGrid/>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    </div>
  )
}

export default App
