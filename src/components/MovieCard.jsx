// new
import React from 'react'

function MovieCard({ movie:{title, backdrop_path, original_language, vote_average, poster_path, overview, release_date, popularity} }) {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-inner shadow-light-100/10 hover:scale-105 transition-transform duration-300">
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/src/assets/icons/no-movie.png'} alt={title} 
      className='rounded-lg h-auto w-full' />
      
      <div>
        <h3 className='mt-4 text-white font-bold text-base line-clamp-1'>{title}</h3>
        <div className='mt-2 flex flex-row items-center flex-wrap gap-2'>

          <div className='flex flex-row items-center gap-1'>
            <img src="./src/assets/icons/star.svg" alt="star" className='size-4 object-contain'/>
            <p className='font-bold text-base text-white'> {vote_average ? vote_average.toFixed(1): 'N/A'}</p>
          </div> 

          <span className='text-sm text-gray-100'>•</span>

          <p className='capitalize text-gray-100 font-medium text-base'>{original_language}</p>

          <span className='text-sm text-gray-100'>•</span>

          <p className='text-gray-100 font-medium text-base'>{release_date ? release_date.split('-')[0]: "N/A"}</p>

        </div>
      </div>
    </div>
  )
}

export default MovieCard