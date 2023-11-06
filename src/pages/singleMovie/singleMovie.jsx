import { useParams } from "react-router-dom";
import MovieInfor from "./movieInfor";
import './singleMovie.scss';
import Navbar from "../NavBar/Navbar";

const api_key = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

// const api_key = '7f63860d3f8dec1c3addd638483a4b7d';

// ====================== specifiv movie by id url
//       https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}

//  ====================== get original image for background cover url link <img with original resolution>
//       https://image.tmdb.org/t/p/original

//  ======================== get casts url =========================
//   movie_details_url/{movie_id}/credits?api_key={api_key}

//  ======================== get movie video =========================
//   movie_details_url/{movie_id}/videos?api_key={api_key}

const SingleMovie = () => {
    const { id } = useParams();
    
    return (
        <div className="singleMovie">
            <Navbar/>
            <MovieInfor movie_id={id} />
        </div>
    )
};

export default SingleMovie;