
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Footer from './pages/footer';
import Movie from './pages/movie';
import Home from './pages/home';
import Trailers from './pages/trailers';
import Navbar from './pages/NavBar/Navbar';

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Movie />} />
                <Route path="/watch/:id" element={<Trailers />} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;