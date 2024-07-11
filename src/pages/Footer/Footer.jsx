import './Footer.scss';


const Footer = () => {
    return (
        <div className="footer grid">
            <div className="copyright grid">
                <span>
                    &copy;<small> {new Date().getFullYear()}</small> <a href="#"> FilmHub </a> All Rights Reserved.
                </span>
            </div>
            <div className="developer grid">
                <span>
                    made with <span>❤️</span> by
                    <a href="https://jamesmumo.vercel.app/" target="_blank">
                        <strong> Jaymoh </strong>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Footer;