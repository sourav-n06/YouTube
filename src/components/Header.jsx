import React from 'react'
import menuLogo from "./assets/hamburger.png"
import searchLogo from "./assets/search.png"
import userLogo from "./assets/man.png"
import movieLogo from "./assets/movie.png"
import notificationLogo from "./assets/notification-bell.png"
import voiceLogo from "./assets/voice.png"

const Header = () => {
  return (
    <div className=" grid grid-flow-col py-4 shadow-md">

        <div className='flex items-center col-span-1'>
            <div className='px-2'>
              <div className="p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                  <img className='w-6' src={menuLogo}/>
              </div>
            </div>
            <div className='pl-2'>
              <img className=" h-6 w-18 m-0 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/508px-YouTube_Logo_2017.svg.png"
              alt="YTlogo" />
            </div>
        </div>

        <div className=' col-span-10 flex justify-center '>
            <input className=" w-1/2 p-2  border border-gray-400 rounded-l-full" type='text'placeholder='Search'/>
            <button className=' px-3 mr-3 border border-gray-400 rounded-r-full  hover:bg-slate-200'><img className='w-8' src={searchLogo}/></button>
            <div className=' bg-slate-100 flex items-center p-2 rounded-full cursor-pointer hover:bg-slate-200'>
              <img  className='size-7' src ={voiceLogo}/>
            </div>
        </div>

        <div className='flex col-span-1  justify-evenly px-2 items-center'>
          <div className='rounded-full p-2 hover:bg-slate-200  cursor-pointer'>
            <img className='size-6 '  src={movieLogo}/>
          </div>
          <div className='rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
            <img className='size-6' src={notificationLogo}/>
          </div>
          <div className='cursor-pointer'>
            <img className='size-9' src={userLogo}/>
          </div>
        </div>
    </div>
  )
}

export default Header
