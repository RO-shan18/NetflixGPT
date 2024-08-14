import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";
import usePopularMovies from "../Hooks/usePopularmovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
const Browse = ()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    
    return(
        <div>
            <Header/>
            <MainSection />
            <SecondarySection/>
        </div>
    )
}

export default Browse;