import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const GetPlayingMovies = async () => {
    const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_Options)

    const data = await movies.json();

    dispatch(addUpcomingMovies(data?.results));

    console.log(data?.results);
  };

  useEffect(() => {
    GetPlayingMovies();
  },[]);
};

export default useUpcomingMovies;
