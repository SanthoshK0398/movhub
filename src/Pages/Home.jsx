import React from 'react'
import NavBar from '../components/NavBar'
import homeBanner from '../assets/strangethings.png'
import title from '../assets/Stranger-Things-logo.png'
import play from '../assets/play.svg'
import info from '../assets/info-circle.svg'
import TitleCard from '../components/TitleCard'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-black'>
        <NavBar/>
        <section className='relative h-screen bg-cover' style={{backgroundImage: `url(${homeBanner})`}}>
          {/* <img src={homeBanner} alt="" className='w-full'/> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          {/* strnger things  logo + text + buttons */}
          <div className="absolute z-[2] bottom-[40%] text-justify left-[5%] 
                sm:bottom-[35%] md:bottom-[35%] 
                w-[90%] sm:w-[80%] md:w-auto">
  
              {/* Logo Title */}
              <img src={title} alt="title" className="w-40 mx-auto sm:mx-0 sm:w-52 md:w-60" />
              
              {/* Description */}
              <p className="text-white text-sm mx-auto sm:mx-0 sm:text-base md:text-lg max-w-[90%] sm:max-w-[70%] md:max-w-[40%] mt-4">
                A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
                <button className="bg-white flex items-center justify-center gap-3 px-5 py-2 rounded text-sm sm:text-lg text-black font-semibold hover:bg-[#ffffffcc]">
                  <img src={play} alt="play" className="w-5 sm:w-6" />
                  Play
                </button>
                <button className="bg-[#6d6d6eb3] flex items-center justify-center gap-3 px-5 py-2 rounded text-sm sm:text-lg text-white font-semibold hover:bg-[#6d6d6e66]">
                  <img src={info} alt="info" className="w-5 sm:w-6" />
                  More Info
                </button>
              </div>
          </div>

          <div className=" absolute mt-150 pl-5 sm:pl-15 md:pl-20  space-y-10">
            <TitleCard id={"home"} title={"Now playing"} category={"now_playing"} />
            <TitleCard id={"movie"} title={"Popular on Movhub"} category={"popular"} />
            <TitleCard id={"tvshows"} title={"Top Rated"} category={"top_rated"} />
            <TitleCard id={"popular"} title={"Upcoming"} category={"upcoming"} />
          </div>
        </section> 

        {/* Content Below Hero */}
      

      <Footer/>

    </div>
  )
}

export default Home


// before responsive

{/* <div className='absolute z-[2] bottom-[35%] left-[5%]'>
            <img src={title} alt="" className='w-60'/>
            <p className='text-white w-[30%]  '>A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined 
              his looks. A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who 
              ruined his looks.</p>
            <div className='flex gap-10 mt-5'>
              <button className='bg-white flex items-center gap-4 px-6 py-2 rounded-lg text-xl font-medium hover:bg-[#ffffffbf] cursor-pointer'>
                <img src={play} alt="play" className='w-7' />Play
              </button>
              <button className='bg-[#6d6d6eb3] text-white flex items-center gap-4 px-6 py-2 rounded-lg text-xl font-medium hover:bg-[#6d6d6e66] cursor-pointer'>
                <img src={info} alt="play" className='w-8' />More Info
              </button>
            </div>
          </div> */}