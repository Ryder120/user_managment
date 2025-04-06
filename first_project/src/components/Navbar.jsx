import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // State for login modal
  const [showUserMenu, setShowUserMenu] = useState(false); // State for user menu popup
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null); // State for user ID

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const userId = localStorage.getItem('userId');
    setUserId(userId); // Set user ID from localStorage
    if (storedUser) {
      setUser(storedUser);
    } else {
      console.log('No user found in localStorage');
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const LoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logout successful');
    
  };

  const handleEditProfile = () => {
    // alert('Edit Profile clicked');
     navigate(`/user/${userId}`)
    // navigate('/edit-profile');
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <>
      <Toaster  richColors />
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        {/* Login Section */}
        <div className='hidden md:flex items-center space-x-4'>
          <AiOutlineUser size={20} />
          {user ? (
            <div className='relative'>
              <button onClick={toggleUserMenu} className='bg-[#00df9a] text-black px-4 py-2 rounded'>
                {user}
              </button>
              {showUserMenu && (
                <div className='absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg'>
                  <button
                    onClick={handleEditProfile}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className='bg-[#00df9a] text-black px-4 py-2 rounded'
              onClick={LoginClick}
            >
              Login
            </button>
          )}
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }
        >
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
          {/* Login Section for Mobile */}
          <div className='p-4'>
            <button
              className='bg-[#00df9a] text-black px-4 py-2 rounded w-full'
              onClick={LoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
