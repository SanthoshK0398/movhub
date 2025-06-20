import React, { useEffect, useState } from 'react'
import search from '../assets/srch.svg'
import profile from '../assets/profile.svg'
import menu from '../assets/icons/navmenu-icon.svg'
import closeicon from '../assets/icons/close-icon.svg'
import logoIcon from '../assets/movhub-01.svg'
import { logout } from '../firebase';
import {auth, getUserData } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



function NavBar() {

  const navigate = useNavigate();

  const [showSignout, setShowSignout]= useState(false);
  const [menuSignout, setMenuSignout]= useState(false);
  const [userName, setUserName] = useState(''); // Placeholder for user name
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  useEffect((prevValue)=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden';
    }else{
      document.body.style.overflow='auto';
    }
    return () => {
      document.body.style.overflow='auto';
    }
  }, [showMobileMenu]);


  useEffect(() => {
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        const getname = await getUserData(user.uid);
        console.log('fetched from firestoe',  getname.name)
        setUserName(getname.name);
      }else{
        setUserName('');
        console.log('user not logged in');
      }
    })
  }, []);

  function handleSignout(prevValue){
    setShowSignout(prevValue => !prevValue);
   }

  function handleMenuSignout(prevValue){
    setMenuSignout(prevValue => !prevValue);
  }

  return(
    <div className='absolute top-0 left-0 w-full z-10 '>
        {/* nav left */}  
      <div className=' container mx-auto flex justify-between items-center py-4 px-6 md:px-10 lg:px-22 bg-transparent'>

            {/* logo goes  here */} 
            <img src={logoIcon} alt="logo" className='w-30 cursor-pointer' />

            {/* nav links goes here */} 
            <ul className='hidden md:flex md:gap-5 lg:gap-15 cursor-pointer text-white text-md'>
              <li>Home</li>
              <li>Movie</li>
              <li>TV Shows</li>
              <li>Popular</li>
            </ul>

        

        {/* nav right */}
        <div className='flex items-center gap-8 relative'>
              <img src={search} onClick={()=>navigate('/search')} alt="search" className='hidden md:block w-7 cursor-pointer'/>
              <img src={profile} alt="profile" className='hidden md:block w-6' onClick={handleSignout}/>
              <p className='hidden md:block text-white text-[12px]'>welcome {userName}</p>

              {/* nav menu icon for mobile view */}
              <img onClick={()=>setShowMobileMenu(true)} src={menu} alt="mav menu icon" className='md:hidden w-10  cursor-pointer'/>
              
              {/* SHOW SIGNOUT BOX ON CLICK */}
                {showSignout &&(
                  <div className='absolute flex flex-col items-center justify-center top-full right-25 w-35 h-15 mt-2 px-2 py-1 bg-[#f5f5f5]/40 rounded-[5px] z-[10] cursor-pointer'>
                    <p className='text-white'>{userName}</p>
                    <p onClick={()=>{logout()}} className='text-white text-sm underline'>Sign Out</p>
                  </div>
              )} 
        </div>
      </div>
      
      {/* menu screen layout */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} top-0 right-0 bottom-0 overflow-hidden bg-[white]/98 transition-all`}>
        <div className='flex justify-end p-8'>
          <img src={closeicon} onClick={()=>setShowMobileMenu(false)} alt="close-icon" className='w-10 cursor-pointer'/>
        </div>
        <ul className='flex flex-col justify-center items-center mt-30 text-3xl text-gray-950'>
        <p className=' underline text-[20px] cursor-pointer' onClick={handleMenuSignout}>welcome {userName}</p>
          {menuSignout && (
            <div className='flex items-center justify-center w-80 bg-[black]/40 mt-2 px-3 py-3 text-sm rounded'>
            <p onClick={()=>{logout()}} className='text-white cursor-pointer'>Sign Out</p>
            </div>
          )}

          <a onClick={()=>setShowMobileMenu(false)} href="#home" className=' px-5 py-6 transition-all'>Home</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#movie" className=' px-5 py-6 transition-all'>Movie</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#tvshows" className=' px-5 py-6 transition-all'>Tv Shows</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#popular" className=' px-5 py-6 transition-all'>Popular</a>
        </ul>
      </div>

    </div>
  )
}

export default NavBar

// return(
//   <div className='w-full flex items-center justify-between px-60 py-6 bg-[black]/60 z-[100]'>
//       {/* nav left */}
//       <div className='flex justify-between items-center gap-100'>
//         <img src={logoIcon} alt="logo" className='w-30 cursor-pointer' />
//       </div>
//       <div>
//         <ul className='flex gap-10 cursor-pointer text-white'>
//             <li>Home</li>
//             <li>Movie</li>
//             <li>TV Shows</li>
//             <li>popular</li>
//           </ul>
//       </div>

//       {/* nav right */}
//       <div className='flex items-center gap-8 relative'>
//         <img src={search} onClick={()=>navigate('/search')} alt="search" className='w-7 cursor-pointer'/>
//         <img src={profile} alt="profile" className='w-6' onClick={handleSignout}/>
//         <p className='text-white underline text-[12px] cursor-pointer' onClick={handleSignout}>welcome {userName}</p>
        

//         {showSignout &&(
//           <div className='absolute flex flex-col items-center justify-center top-full right-25 w-35 h-15 mt-2 px-2 py-1 bg-[#f5f5f5]/40 rounded-[5px] z-[10] cursor-pointer'>
//             <p className='text-white'>{userName}</p>
//             <p onClick={()=>{logout()}} className='text-white text-sm underline'>Sign Out</p>
//           </div>
//         )} 
//       </div>
//   </div>
// )
// }