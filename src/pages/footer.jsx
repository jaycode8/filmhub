
const Footer = () => {
    return (
        <div className="h-28 py-4 grid items-center bg-black text-white">
            <div className="">
                <span className="sm:text-xl">
                    &copy;<small> {new Date().getFullYear()}</small> <a href="#" className="text-sm sm:text-xl"> FilmHub </a> All Rights Reserved.
                </span>
            </div>
            <div className="">
                <span>
                    made with <span>❤️</span> by
                    <a href="https://jamesmumo.vercel.app/" target="_blank" className="transition-all duration-150 hover:text-[gold]">
                        <strong> Jaymoh </strong>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
