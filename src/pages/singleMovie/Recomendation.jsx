
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const Recomendation = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [recomend, setRecomend] = useState([]);

    const fetchMovieVideos = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`);
            console.log(res.data.results);
            setVideos(res.data.results)
        } catch (error) {
            console.log(error);
        }
    };

    const fetchRecommedation = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}`);
            setRecomend(res.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { 
        fetchMovieVideos();
        fetchRecommedation();
    }, []);

    const reloadMovie = (id) => {
        window.location.href = `${id}`;
    };

    return (
        <div className='recomend'>
            <h1>Trailers</h1>
            <section className='trailers'>
                {
                    videos.slice(0,4).map(vid => (
                        <iframe src={`https://www.youtube.com/${vid}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    ))
                }
            </section>
            
            <h1>More Like This</h1>
            <section className='movie_likes'>
                {
                    recomend.slice(0, 8).map(movie => (
                        <Link className='movie'  key={movie.id} onClick={()=> reloadMovie(movie.id)}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt={`${movie?.title}`} />
                            <p className='movie_name'>{movie?.title}</p>
                        </Link>
                    ))
                }
            </section>
        </div>
    );
}

export default Recomendation;

// to={`/${movie.id}`}
