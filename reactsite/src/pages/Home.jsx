import MovieCard from "../components/MovieCard"
import { useState } from "react";
import '../css/Home.css'

function Home(){
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        {id: 1, title: "Avengers", release_date: "2012"},
        {id: 2, title: "John Wick", release_date: "2014"},
        {id: 3, title: "Interstellar", release_date: "2014"},
        {id: 4, title: "Parasite", release_date: "2019"},
        {id: 5, title: "Jurrasic Park", release_date: "1993"}

    ];
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
 
    return (


        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type ="text" 
                placeholder="Search for movies..."
                className="search-input" 
                value= {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/> 
                <button type="submit" className="search-button">Search</button>
                
                </form>
            
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                    <MovieCard movie ={movie} key = {movie.id} /> 
                    ))}
            </div>
        </div>

    )
}

export default Home
