import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Trailer from "./trailer";

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

const Trailers = () => {
    const { id } = useParams();
    const [trailers, setTrailers] = useState([]);

    const fetchMovieTrailers = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`);
            setTrailers(res.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovieTrailers();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full h-auto py-5 pt-12 px-4 sm:px-10">
            <h1 className="text-2xl font-extrabold">Title</h1>
            <p>The actual movie isnt available....enjoy below trailers</p>
            <div className="grid gap-5 sm:grid-cols-trailers-grid py-3">
                {trailers.map((trailer, index) => (
                    <div className="lg:h-52" key={index}>
                        <Trailer trailer={trailer} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trailers;
