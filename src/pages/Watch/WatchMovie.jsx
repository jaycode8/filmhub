
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './WatchMovie.scss';
import { BiArrowBack } from 'react-icons/bi';
import { FaHeart, FaCloudDownloadAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import vid from './21.mp4';
import { FaPlay } from 'react-icons/fa';
import axios from 'axios';

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const WatchMovie = () => {
    const [play, setPlay] = useState(false);
    const [movie, setMovie] = useState([]);
    const [videos, setVideos] = useState([]);
    let { id } = useParams();
    const movieId = location.pathname.split('/')[2];

    const fetchMovie = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);
            setMovie(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchMovieVideos = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`);
            console.log(res.data.results);
            setVideos(res.data.results[0])
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovie();
        fetchMovieVideos();
    }, []);

    // console.log(videos);

    return (
        <div className='movie_watch'>
            <div className='top_navbar'>
                <Link to={`/${movieId}`} className='back_to_movie'>
                    <BiArrowBack />
                    <span className='movie_name'>{movie.title}</span>
                </Link>
                <span>
                    <FaHeart className='heart'/>
                    <a href={`${vid}`} download={movie.title}>
                        <FaCloudDownloadAlt/>
                        Download
                    </a>
                </span>
            </div>
            {
                play ? <main>
                    <video controls autoPlay>
                        <source src={`https://www.youtube.com/${videos.key}`} type='video/mp4' title='movie' />
                    </video>
                </main> :
                    <main>
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                        <button className='play_btn' onClick={() => setPlay(true)}>
                            <FaPlay/>
                        </button>
                        
                    </main>
            }
        </div>
    );
}

export default WatchMovie;
