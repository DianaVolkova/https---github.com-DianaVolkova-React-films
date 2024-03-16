import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key = {movie.imdbID} {...movie} />)
            ) : (
                <img src="error.jpg" alt="Not found"/>
            )}
        </div>
    );
}

export {Movies};