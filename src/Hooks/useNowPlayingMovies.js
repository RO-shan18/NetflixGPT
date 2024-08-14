import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const GetPlayingMovies = async () => {
    const movies = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1",API_Options);

    const data = await movies.json();

    dispatch(addNowPlayingMovies(data?.results));

    console.log(data?.results);
  };

  useEffect(() => {
    GetPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;
