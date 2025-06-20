import React, { useEffect, useRef, useState } from 'react'



function TitleCard({title, category, id}) {

    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef()

    const handleScroll = (e) => {
      e.preventDefault()
      cardsRef.current.scrollLeft += e.deltaY
    }

    useEffect(() => {
      const cardsContainer = cardsRef.current;
      if (!cardsContainer) return;
    
      cardsContainer.addEventListener('wheel', handleScroll, { passive: false });
    
      return () => {
        cardsContainer.removeEventListener('wheel', handleScroll);
      };
    }, []);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDZmYzJmYjkwOGVjNjAwOTg5ODI0NTY0M2M3OTg1OCIsIm5iZiI6MTc0OTcyNDUwNC42NTc5OTk4LCJzdWIiOiI2ODRhYWQ1OGViZjZlNjZjYTRiMGQzZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8gir6AvtqjBt-V7CVf8urDGF_g5zkA6aMCKKrYpkaqI'
        }
      };

      const fetchMovie = async ()=>{
        try{
            const res = await fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            const data = await res.json()
            setApiData(data.results)

        }catch(error){
            console.error('Error fetching moives :', error)
        }
      }
      
      useEffect(() => {
        fetchMovie();
      }, []);
      

  return (
    <div id={id} className='mt-[50px] mb-[30px]'>
        <h1 className='mb-6 text-white font-semibold text-2xl'>{title}</h1>
        <div className='flex gap-[10px] overflow-x-scroll scrollbar-hide' ref={cardsRef}>
            {apiData.map((movie, index)=>{
                return <div key={index} className='shrink-0 cursor-pointer hover:scale-102 transition-transform duration-300 relative'>
                        <img src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path} alt="title-card" className='w-[250px] rounded' />
                        <p className='text-[12px] text-white mt-1 absolute bottom-[10px] left-[10px]'>{movie.title}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default TitleCard