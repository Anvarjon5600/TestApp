import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import {ChangeEventHandler , useState } from 'react'
import { useGetUsersQuery } from '../../store/services/usersApi'
import { UsersType } from '../../store/services/type'
import { useDispatch } from 'react-redux'
import { userAdd } from '../../store/Slice/Users.slice'

function Login() {
  const dispatch=useDispatch()
  const navigate = useNavigate()
     const { data: usersData } = useGetUsersQuery('');

  const [loggedUser, setLoggedUser] = useState({
    email: '',
    password: ''
  })

  const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoggedUser({
      ...loggedUser,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit:ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (usersData) {
      const checkPass = usersData.find((item:UsersType ) => item.email === loggedUser.email && item.password === loggedUser.password)
    if (!checkPass) {
      alert("Ошибка пароля или электронной почты. Повторите попытку.")
      return
      }
      navigate('/')
      dispatch(userAdd(checkPass))
      localStorage.setItem("loggedIn", 'true')
      localStorage.setItem("userId", `${checkPass.id}`)
    }
    
  }

  return (
    <div className='login-page'>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit} action="#" className="login-forma">
        <input onChange={handleChange} name='email' type="text" placeholder='User email' />
        <input onChange={handleChange} name='password' type="password" placeholder='User password' />
        <button type='submit'>Sign in</button>
      </form>
      <p className='login-text'>Already signed up?   <NavLink to={'/register'} className='register'>Go to sign up.</NavLink></p>
    </div>
  )
}

export default Login


