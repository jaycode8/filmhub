
const Casts = ({casts}) => {
    return (
        <div className="w-full px-4 sm:px-10">
            <h1 className="font-extrabold text-[1.5rem]">Featured Casts</h1>
            <div className="grid justify-center grid-cols-casts-grid gap-5 pt-3">
                {casts.slice(0, 14).map((cast, index) => (
                    <div key={index} className="h-[17rem] w-full grid grid-rows-moviecast rounded-md overflow-hidden cursor-pointer shadow-2xl">
                        <div className="w-full h-full">
                            <img src={`https://image.tmdb.org/t/p/w500${cast?.profile_path}`} alt={`${cast?.name}`} className="object-cover w-full h-full" />
                        </div>
                        <div className="w-full h-full p-2">
                            <h3 className="font-bold">{cast.name}</h3>
                            <p className="italic">{cast.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Casts;
