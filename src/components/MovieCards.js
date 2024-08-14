import { CDN_URL } from "../utils/constants";

const MovieCards = ({ poster_path }) => {
  return (
    <div className="px-2">
      <img
        className="max-w-40 "
        src={CDN_URL + poster_path}
        alt="movie_image"
      />
    </div>
  );
};

export default MovieCards;
