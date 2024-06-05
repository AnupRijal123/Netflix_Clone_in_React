import '../styles/Row.css';
import { useState, useEffect } from 'react';
import axios from '../api/Axios';
function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

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
                            key={movie.id}
                            alt={movie.name}
                            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        />
                    )
                ))}
            </div>
        </div>
    )
}
export default Row;