
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { BiMenu } from 'react-icons/bi';
import { GrFormSearch } from 'react-icons/gr';
import { useState } from 'react';

const Navbar = () => {
    const [keyword, setKeyword] = useState('');

    const genres = [
        { "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" },
        { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" },
        { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" },
        { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" },
        { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" },
        { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" },
        { "id": 37, "name": "Western" }
    ];

    const menuToggle = () => {
        document.querySelector('nav').classList.toggle('active')
    };

    const handleSearch = async (event) => {
        try {
            event.preventDefault();
            alert(keyword);
        } catch {
            console.log('Error');
        }
    };

    return (
        <div className='navbar'>
            <Link className='logo' to='/'>
                <img src='/fh2.ico' />
            </Link>
            <nav>
                {
                    genres.map(link => (
                        <a href='#' key={link.id} onClick={menuToggle}><li>{link.name}</li></a>
                    ))
                }
            </nav>
            <form className='search-form' onSubmit={handleSearch}>
                <input
                    type='search'
                    name='search'
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button type='submit'><GrFormSearch className='icon' /></button>
            </form>
            <BiMenu className='navBtn'
                onClick={menuToggle}
            />
        </div>
    )
};

export default Navbar;
