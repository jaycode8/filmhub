import './Footer.scss';


const Footer = () => {
    return (
        <div className='footer grid'>
            <div className='copyright grid'>
                <span>&copy;<small>  {new Date().getFullYear()}</small> <a href='#'> FilmHub </a> All Rights Reserved.</span>
            </div>
            <div className='developer grid'>
                <span>made with love by <a href='https://jamesmumo-cf8e5.web.app' target='_blank'> Jaymoh </a></span>
            </div>
        </div>
    );
};

export default Footer;