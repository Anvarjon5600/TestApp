import './Authorization.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { ChangeEventHandler, useState } from 'react'
import { nanoid } from 'nanoid'
import { useGetUsersQuery, useCreateUserMutation } from '../../store/services/usersApi'
import { UsersType } from '../../store/services/type'

function Register() {
   const navigate = useNavigate()
   const { data: usersData } = useGetUsersQuery('');
   const [createUser, { isLoading }] = useCreateUserMutation()

   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
      id: '',
      score: 0
   })


   const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setNewUser({
         ...newUser,
         [e.target.name]: e.target.value,
         id: nanoid()
      })
   }

   const handleSubmit: ChangeEventHandler<HTMLFormElement> = e => {
      e.preventDefault()

      if (usersData) {
         const checkUser = usersData.find((item: UsersType) => item.email === newUser.email)
         if (checkUser) {
            alert("Извините, этот адрес электронной почты уже зарегистрирован")
            return
         }
         createUser(newUser)
         navigate('/login')
      }

   }


   return (
      <div className='register-page'>
         <h1>Sign up</h1>
         <form onSubmit={handleSubmit} action="#" className="register-forma">
            <input name='name' onChange={handleChange} type="text" placeholder='User name' />
            <input name='email' onChange={handleChange} type="email" placeholder='User email' />
            <input name='password' onChange={handleChange} type="password" placeholder='User password' />
            <button type='submit'> Sign up {isLoading && 'loading...'}</button>
         </form>
         <p className='register-text'>Already signed up ? <NavLink to={'/login'} className={'login'}> Go to sign in</NavLink></p>
      </div>
   )
}

export default Register