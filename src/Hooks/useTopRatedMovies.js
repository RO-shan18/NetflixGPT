import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const GetPlayingMovies = async () => {
    const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_Options);

    const data = await movies.json();

    dispatch(addTopRatedMovies(data?.results));

    console.log(data?.results);
  };

  useEffect(() => {
    GetPlayingMovies();
  },[]);
};

export default useTopRatedMovies;
