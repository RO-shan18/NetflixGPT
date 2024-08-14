import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularmovies = () => {
  const dispatch = useDispatch();

  const GetPlayingMovies = async () => {
    const movies = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_Options)

    const data = await movies.json();

    dispatch(addPopularMovies(data?.results));

    console.log(data?.results);
  };

  useEffect(() => {
    GetPlayingMovies();
  },[]);
};

export default usePopularmovies;
