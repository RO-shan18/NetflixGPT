import MovieCards from "./MovieCards";

const Movielists = ({ Title, movies }) => {
  console.log(movies);

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="px-4 py-2 relative -top-40">
      <h1 className="text-3xl font-semibold py-4 hide-scroll-bar">{Title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          {movies.map((movie) => (
            <MovieCards poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
  );
};

export default Movielists;
