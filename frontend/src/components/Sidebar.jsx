import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Sidebar({ selectedUser, setSelectedUser }) {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${selectedUser ? "max-md:hidden" : ""}` }>
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
          <img src={assets.logo} alt='Logo' className='max-w-40'/>
          
          <div 
            className='relative group'
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <img 
              src={assets.menu_icon} 
              alt='menu' 
              className='max-w-5 cursor-pointer'
              onClick={() => setMenuOpen(prev => !prev)}
            />
            
            {menuOpen && (
              <div className='absolute right-0 bg-white shadow-lg rounded-md p-3 w-32 top-8 z-10 text-black'>
                <p 
                  onClick={() => navigate("/profile")} 
                  className='cursor-pointer text-sm'
                >
                  Edit Profile
                </p>
                <hr className='my-2 border-t border-gray-500'/>
                <p className='cursor-pointer text-sm'>
                  Logout 
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
