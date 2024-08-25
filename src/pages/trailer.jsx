
const Trailer = ({trailer}) => {
    return (
        <div className="w-full h-80 lg:h-full sm:col-span-2 lg:col-span-1">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${trailer?.key}`} title={`${trailer?.name}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
};

export default Trailer;
