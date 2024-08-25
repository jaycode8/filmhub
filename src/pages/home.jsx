
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movies from "./movies";
import Navbar from "./NavBar/Navbar";


const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const Home = () => {
    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([]);
    const [genre, setGenre] = useState([]);
    const [relDate, setRelDate] = useState("");

    const fetchMovies = async () => {
        let index = Math.floor(Math.random() * 10);
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`);
        fetchMovieCasts(res.data.results[index].id);
        const res2 = await axios.get(`https://api.themoviedb.org/3/movie/${res.data.results[index].id}?api_key=${api_key}`);
        setMovie(res2.data);
        setGenre(res2.data.genres);
        setRelDate(res2.data.release_date.split("-")[0]);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovieCasts = async (movie_id) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}`);
            setCast(res.data.cast);
        } catch (error) {
            console.log(error);
        }
    };
    const formatString = (currentIndex, maxIndex, sign) => {
        return currentIndex == maxIndex - 1 ? " " : `${sign} `;
    };

    console.log(movie);

    return (
        <div className="">
            <div className="w-full h-[100vh] bg-[#121212aa] grid relative">
                <Navbar/>
                <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={`${movie?.title}`} className="absolute top-0 left-0 w-full h-full -z-10 object-cover object-center" />
                <div className="w-full px-3 sm:px-0 sm:w-[80%] text-white flex flex-col gap-6">
                    <h1 className="text-2xl font-extrabold">{movie?.title}</h1>
                    <p className="">Duration: {movie?.runtime}</p>
                    <p className="grid grid-flow-col place-items-center justify-start gap-3">
                        <span className="text-2xl grid place-items-center grid-flow-col gap-1">
                            <AiFillStar className="text-[gold]"/> {movie?.vote_average}
                        </span>
                        {genre.map((gn, index) => gn.name + formatString(index, genre.length, "|"))}
                        {movie?.adult ? "|  +18" : " "}
                    </p>
                    <h2>{relDate}</h2>
                    <p className="">{movie?.overview}</p>
                    <p className="">starring : {cast.slice(0, 8).map((ch, i) => ch.name + formatString(i, 8, ","))}</p>
                    <Link to={`/watch/${movie.id}`} className="w-32 py-2 px-3 text-xs uppercase rounded-[5rem] text-white outline-1 outline outline-white grid place-items-center grid-flow-col justify-center gap-[0.1rem] transition-all duration-500 ease-in hover:bg-[#121212] hover:outline-[#121212]">
                        <BsFillPlayFill className="text-2xl" />
                        watch
                    </Link>
                </div>
            </div>
            <Movies />
        </div>
    );
};

export default Home;
