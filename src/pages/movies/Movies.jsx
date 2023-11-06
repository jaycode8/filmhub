
import './Movies.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);;

    const movie_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`;

    const fetchMovies = async () => {
        const res = await axios.get(movie_url);
        setMovies(res.data.results);
        console.log(res)
    }
    const pagination = async (n) => {
        setPage(n);
        fetchMovies();
    }
    useEffect(() => {
        fetchMovies();
    }, []);

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    

    return (
        <div className="Movies">
            <p className='genre_name'>Top Movies</p>
            <section className='movies_list'>
                {
                    movies.map(movie => (
                        <Link className='movie' to={`${movie.id}`} key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt={`${movie?.title}`} />
                            <p className='movie_name'>{movie?.title}</p>
                        </Link>
                    ))
                }
            </section>
            <div className='pagination grid'>
                <section className='grid'>
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={5}
                        navigation={{ nextEl: '#chevronRight', prevEl: '#chevronleft' }}
                        pagination={{ clickable: true }}
                        className='swiper grid'
                    >
                        {
                            num.map((n, index) => (
                                <SwiperSlide className='swiperSlide grid' key={index}>
                                    <span onClick={() => pagination(n)}>{ n }</span>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <FiChevronLeft id='chevronleft' />
                    <FiChevronRight id='chevronRight' />
                </section>
            </div>
        </div>
    )
};

export default Movies;