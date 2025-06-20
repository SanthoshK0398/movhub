import React, { useEffect } from 'react'
import { useState } from 'react'
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useDebounce } from 'react-use';

function Search() {

const navigateToHome = useNavigate();

const [searchMovie, setSearchMovie] = useState('');
const [movieList, setMovieList] = useState([]);
const [debounceSearchMovie, setDebounceSearchMovie] = useState('');
const [error, setError] = useState('');

useDebounce(() => setDebounceSearchMovie(searchMovie), 500, [searchMovie]);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDZmYzJmYjkwOGVjNjAwOTg5ODI0NTY0M2M3OTg1OCIsIm5iZiI6MTc0OTcyNDUwNC42NTc5OTk4LCJzdWIiOiI2ODRhYWQ1OGViZjZlNjZjYTRiMGQzZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8gir6AvtqjBt-V7CVf8urDGF_g5zkA6aMCKKrYpkaqI'
  }
};

const fetchSearchMovie = async(query='')=>{
  try{
    const res = await fetch(query?`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent=(query)}`:
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options);
    
    if(!res.ok){
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    console.log('Search results:', data.results);
    
    if (data.results.length === 0) {
      setError('No movies found. Please try a different search...');
      setMovieList([]);
    } else {
    setMovieList(data.results); 
    setError('');
    }
  }catch(error){
    console.error('Error fetching search movie:', error);
    setError('Failed to fetch movies. Please try again later...')

  }
}

useEffect(() => {
  fetchSearchMovie(debounceSearchMovie);
}
, [debounceSearchMovie]);


  return (
    <> 
    <div className='bg-black w-full min-h-screen'>
    <NavBar/>
      <div className='pt-25'>
        <div className="w-full max-w-100 bg-[white]/20  px-4 py-3 rounded-lg  md:max-w-3xl mx-auto">
            <div className='relative flex items-center'>
              <img src="/src/assets/srch.svg" alt="seach icon"  className='absolute left-2 h-5 w-5'/>
              <input 
              type="text"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className='w-full bg-transparent py-2 sm:pr-10 pl-10 text-base text-gray-200 placeholder-light-200 outline-hidden'
              />
              <p className=' cursor-pointer pr-2 text-xl text-white' onClick={()=>navigateToHome('/')}>x</p>
            </div>
        </div>

        <section className="space-y-10">
          <h1 className='mx-auto ml-10 sm:ml-20 text-2xl text-white mt-10'>Search Movie..</h1>
          {error ? (<p className='mx-auto ml-10 sm:ml-20 text-lg text-red-500 mt-10'>{error}</p>) : (
              <ul className='grid mx-5 grid-cols-2 md:mx-20 gap-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
              {movieList.map((movie)=>(
                <MovieCard key={movie.id} movie={movie} />
              ))}
              </ul>
          )}
          
        </section>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Search