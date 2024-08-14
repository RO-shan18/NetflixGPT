import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addOfficialTrailer } from "../utils/moviesSlice";

const useOfficialTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_Options
    );
    const json = await data.json();

    const Videolists = json.results.filter((video) => video.type === "Trailer");

    const officialTrailer = Videolists.length ? Videolists[0] : json[0];
    dispatch(addOfficialTrailer(officialTrailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useOfficialTrailer;
