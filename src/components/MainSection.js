import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainSection = () => {

  const movies  = useSelector((store) => store.movies?.NowPlayingMovies);
  if(movies == null) return;
  
  const mainmovie = movies[5];
  const {original_title, overview, id} = mainmovie;

  return (
    <div>
        <VideoTitle Title={original_title} Description={overview}  />
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainSection;
