
const Recommend = ({ recomend }) => {
    const reloadMovie = (id) => {
        window.location.href = `${id}`;
    };
    return (
        <div className="w-full px-3 sm:px-10 py-5">
            <h1 className="font-extrabold text-[1.5rem]">You may also watch</h1>
            <div className="grid justify-center grid-cols-similar-grid gap-5 pt-3">
                {recomend.slice(0, 18).map((movie) => (
                    <div onClick={() => reloadMovie(movie.id)} key={movie.id} className="h-[17rem] rounded-md overflow-hidden cursor-pointer shadow-2xl">
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={`${movie?.title}`} className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommend;
