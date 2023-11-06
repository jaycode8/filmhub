
import React from 'react';
import './singleMovie.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillPlayCircle } from 'react-icons/ai';
import Recomendation from './Recomendation';

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const MovieInfor = ({ movie_id }) => {
    const id = movie_id;
    const [cast, setCast] = useState([]);
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState([]);
    const [relDate, setRelDate] = useState('');

    const fetchMovie = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
            setMovie(res.data);
            setGenre(res.data.genres);
            setRelDate(res.data.release_date.split('-')[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchMovieCasts = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`);
            setCast(res.data.cast)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovie();
        fetchMovieCasts();
        window.scrollTo(0, 0)
    }, []);

    const formatString = (currentIndex, maxIndex, sign) => {
        return (currentIndex == maxIndex - 1) ? '' : ` ${sign} `
    }

    console.log(movie)

    return (
        <div>
            <div className='movie_info'>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className='cover_photo' />
                <div className='movie_img'>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                </div>
                <div className='movie_details'>
                    <h1 className='movie_title'>{movie.title}</h1>
                    <section>
                        <div className='div'>
                            <span className='resolution'>HD 4K</span>
                            <span className='genres'>
                                {
                                    genre.map((gn, index) => (
                                        gn.name + formatString(index, genre.length, '|')
                                    ))
                                }
                                {
                                    movie.adult ? '|  +18' : ' '
                                }
                            </span>
                            <span className='date'>{relDate}</span>
                        </div>
                        <div className='movie_desc'>
                            <p>{movie.overview}</p>
                        </div>
                        <p className='cast'>
                            starring : <span>{
                                cast.slice(0, 8).map((ch, i) => (
                                    ch.name + formatString(i, 8, ',')
                                ))
                            }</span>
                        </p>
                        <div className='bar'>
                            <FaShareAlt className='share_icon' /> |
                            <p>Languages : {movie.original_language}</p>
                            <Link to={`/watch/${movie.id}`} className='watch_movie'>
                                <AiFillPlayCircle />
                                Watch
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
            <Recomendation />
        </div>
    )
}

export default MovieInfor;
