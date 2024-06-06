import '../styles/Row.css';
import { useState, useEffect } from 'react';
import axios from '../api/Axios';
import Youtube from 'react-youtube';
function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerKey, setTrailerKey] = useState("");
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerKey) {
            setTrailerKey('')
        } else {
            axios.get(`/movie/${movie.id}/videos?api_key=4b9fdaf5eb408aab296969b996e4f742&language=en-US`)
                .then((response) => {
                    setTrailerKey(response.data.results[0]?.key);

                }).catch((error) => {
                    console.log(error)
                });
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters_div">
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path))
                    && (
                        <img src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            alt={movie.name}
                            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        />
                    )
                ))}
            </div>
            {trailerKey &&
                <Youtube videoId={trailerKey} opts={opts} />
            }
        </div>
    )
}
export default Row;