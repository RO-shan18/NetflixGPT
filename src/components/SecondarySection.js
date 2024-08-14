import { useSelector } from "react-redux";
import Movielists from "./Movielists";

const SecondarySection = ()=>{
    const movie = useSelector(store => store.movies)
    console.log(movie)
    
    return (
        <div className="bg-black text-white">
            <Movielists Title={"Now Playing"} movies={movie?.NowPlayingMovies}/>
            <Movielists Title={"Popular"} movies={movie?.PopularMovies}/>
            <Movielists Title={"Top Rated"} movies={movie?.TopRatedMovies}/>
            <Movielists Title={"Upcoming"} movies={movie?.UpcomingMovies}/>
            <Movielists Title={"Now Playing"} movies={movie?.NowPlayingMovies}/>
        </div>
    )
}

export default SecondarySection;