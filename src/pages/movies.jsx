import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Scrollbar, A11y } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const movie_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`;

    const fetchMovies = async () => {
        const res = await axios.get(movie_url);
        setMovies(res.data.results);
        console.log(res);
    };

    const pagination = async (n) => {
        setPage(n);
        fetchMovies();
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <div className="w-full px-3 sm:px-10 py-5">
            <h1 className="font-extrabold text-[1.5rem]">Top movies</h1>
            <div className="grid justify-center grid-cols-3 sm:grid-cols-casts-grid gap-5 pt-3">
                {movies.map((movie) => (
                    <Link to={`${movie.id}`} key={movie.id} className="sm:h-[17rem] rounded-md overflow-hidden cursor-pointer shadow-2xl">
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={`${movie?.title}`} className="object-cover w-full h-full" />
                    </Link>
                ))}
            </div>
            <div className="w-full h-20 grid items-center">
                <section className="h-full w-60 grid">
                    <Swiper modules={[Navigation, Scrollbar, A11y]} spaceBetween={0} slidesPerView={5} navigation={{ nextEl: "#chevronRight", prevEl: "#chevronleft" }} pagination={{ clickable: true }} className="w-full grid items-center">
                        {num.map((n, index) => (
                            <SwiperSlide className="grid" key={index}>
                                <span onClick={() => pagination(n)} className={`w-8 h-8 bg-[#121212] grid items-center text-white cursor-pointer rounded-lg`}>
                                    {n}
                                </span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <FiChevronLeft id="chevronleft" className="text-[2rem] absolute cursor-pointer left-[5%] sm:left-[30%] lg:left-[39%]" />
                    <FiChevronRight id="chevronRight" className="text-[2rem] absolute cursor-pointer right-[5%] sm:right-[30%] lg:right-[39%]" />
                </section>
            </div>
        </div>
    );
};

export default Movies;
