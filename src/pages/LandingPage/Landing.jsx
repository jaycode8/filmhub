
import './Landing.scss';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai'
import Navbar from '../NavBar/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Movies from '../movies/Movies';
import { Link } from 'react-router-dom';

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const LandingPage = () => {
    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([]);
    const [genre, setGenre] = useState([]);
    const [relDate, setRelDate] = useState('');

    const fetchMovies = async () => {
        let index = Math.floor(Math.random() * 10);
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`);
        fetchMovieCasts(res.data.results[index].id);
        const res2 = await axios.get(`https://api.themoviedb.org/3/movie/${res.data.results[index].id}?api_key=${api_key}`);
        setMovie(res2.data)
        setGenre(res2.data.genres);
        setRelDate(res2.data.release_date.split('-')[0]);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    // setTimeout(() => {
    //     fetchMovies()
    // }, 10000)

    const fetchMovieCasts = async (movie_id) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}`);
            setCast(res.data.cast)
        } catch (error) {
            console.log(error);
        }
    };
    const formatString = (currentIndex, maxIndex, sign) => {
        return (currentIndex == maxIndex - 1) ? ' ' : `${sign} `
    };

    return (
        <div className='HomePage'>
            <div className="landing">
                <Navbar />
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='bgImg' />
                <div className="details">
                    <p className="duration">
                        Duration: 1h 45m
                    </p>
                    <p className="genre">
                        <span><AiFillStar /> 6.5 </span>
                        {
                            genre.map((gn, index) => (
                                gn.name + formatString(index, genre.length, '|')
                            ))
                        }
                        {
                            movie.adult ? '|  +18' : ' '
                        }
                    </p>
                    <h2>{relDate}</h2>
                    <h1>{movie.title}</h1>
                    <p className="desc">
                        {movie.overview}
                    </p>
                    <p className='cast'>
                        starring : {
                            cast.slice(0, 8).map((ch, i) => (
                                ch.name + formatString(i, 8, ',')
                            ))
                        }
                    </p>
                    <Link to={`/watch/${movie.id}`} className="watch">
                        <BsFillPlayFill className='play' />
                        watch
                    </Link>
                </div>
            </div>
            <Movies />
        </div>
    )
};

export default LandingPage;
