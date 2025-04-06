import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'sonner'


const Login = () => {
  useEffect(() => { }, [])

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Login clicked', email, password)
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password })
      toast.success('Login successful')
      console.log(response.data.user._id)
      if (response.data.user._id) {

        navigate('/')
        localStorage.setItem('userId', response.data.user._id)
        localStorage.setItem('user', response.data.user.name)
      }

      // Navigate to another page if needed
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed')
    }
  }

  const registerClick = () => {
    navigate('/register')
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded shadow-lg w-[90%] max-w-[400px]'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <form className='bg-white p-4 rounded shadow-md' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              className='w-full px-3 py-2 border rounded'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              className='w-full px-3 py-2 border rounded'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='bg-[#00df9a] text-black px-4 py-2 rounded w-full'
          >
            Login
          </button>
        </form>
        <button
          className='mt-4 text-red-500'
          onClick={registerClick}
        >
          Don't have an account? <span className='text-blue-500'>Register</span>
        </button>
      </div>
      <Toaster />
    </div>
  )
}

export default Login