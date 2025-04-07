import React from 'react'
import { useNavigate } from 'react-router-dom'



const Protected = () => {
const navigate = useNavigate();
const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    sessionStorage.removeItem('user');
   navigate('/home');

}

  return (
    <div className='text-white'>
        <h1>Protected</h1>
        <p>This is a protected route</p>
        <p>Only authenticated users can see this page</p>

        <button onClick={logout} className='bg-red-500 p-2 rounded-md'>Logout</button>
    </div>
  )
}

export default Protected