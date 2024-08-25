import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Recommend from "./recommend";
import Casts from "./casts";
import Trailer from "./trailer";

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const Movie = () => {
    const { id } = useParams();
    const [casts, setCasts] = useState([]);
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [relDate, setRelDate] = useState("");
    const [recomend, setRecomend] = useState([]);
    const [trailer, setTrailer] = useState([]);

    const fetchMovie = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
            setMovie(res.data);
            setGenre(res.data.genres);
            setLanguages(res.data.spoken_languages);
            setRelDate(res.data.release_date.split("-")[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchMovieCasts = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`);
            setCasts(res.data.cast);
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
    };

    const fetchMovieTrailer = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`);
            setTrailer(res.data.results[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovie();
        fetchMovieCasts();
        fetchRecommedation();
        fetchMovieTrailer();
        window.scrollTo(0, 0);
    }, []);

    const formatString = (currentIndex, maxIndex, sign) => {
        return currentIndex == maxIndex - 1 ? "" : ` ${sign} `;
    };

    return (
        <div className="w-full h-auto grid">
            <div className="h-[70vh] w-full bg-[#121212aa] flex">
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="object-cover w-full h-full -z-10" />
            </div>
            <div className="h-auto lg:h-[60vh] w-[95%] -translate-y-[30%] grid sm:grid-cols-moviesectionB lg:grid-cols-moviesection">
                <div className="w-full h-96 lg:h-full hidden sm:block">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="object-cover w-full h-full" />
                </div>
                <div className="bg-white w-full h-full py-2 px-5">
                    <div className="grid grid-flow-col justify-between">
                        <div className="">
                            <h2 className="font-bold text-[2rem]">{movie.title}</h2>
                            <span className="flex gap-5 items-center justify-start">
                                <p className="">{relDate}</p>
                                <span>
                                    {genre.map((gn, index) => gn.name + formatString(index, genre.length, "|"))}
                                    {movie.adult ? "|  +18" : " "}
                                </span>
                            </span>
                        </div>
                        <span className="flex items-end">
                            <h2 className="text-[1.5rem] font-bold">{movie.vote_average}</h2>
                            <p>/10</p>
                        </span>
                    </div>
                    <p className="pt-3">Languages : {languages.map((lang, index) => lang.name + formatString(index, languages.length, ","))}</p>
                    <p className="pt-3">Tagline : {movie.tagline}</p>
                    <div className="pt-3">
                        <p>{movie.overview}</p>
                    </div>
                </div>
                <Trailer trailer={trailer}/>
            </div>
            <div className="w-full -translate-y-[1%]">
                <div className="bg-[#121212ab] sm:h-28 flex justify-center items-center mb-5">
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="object-cover w-full h-full -z-10" />
                    <div className="absolute text-[#ccc] grid grid-cols-2 gap-4 sm:gap-0 sm:flex justify-evenly sm:text-center w-full font-extrabold px-2 sm:px-0">
                        <div className="w-full sm:w-auto">
                            <h2>STATUS</h2>
                            <p>{movie.status}</p>
                        </div>
                        <div className="w-full sm:w-auto">
                            <h2>RELEASE DATE</h2>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className="w-full sm:w-auto">
                            <h2>ORIGINAL LANGUAGE</h2>
                            <p>{movie.original_language}</p>
                        </div>
                        <div className="w-full sm:w-auto">
                            <h2>RUNTIME</h2>
                            <p>{movie.runtime}</p>
                        </div>
                        <div className="w-full sm:w-auto">
                            <h2>BUDGET</h2>
                            <p>${movie.budget}</p>
                        </div>
                    </div>
                </div>
                <Casts casts={casts} />
            </div>
            <Recommend recomend={recomend} />
        </div>
    );
};

export default Movie;
