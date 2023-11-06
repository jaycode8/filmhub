
import './App.scss';
import LandingPage from "./pages/LandingPage/Landing";
import { Routes, Route } from 'react-router-dom';
import SingleMovie from './pages/singleMovie/singleMovie';
import WatchMovie from './pages/Watch/WatchMovie';
import Footer from './pages/Footer/Footer';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/:id' element={<SingleMovie />} />
                <Route path='/watch/:id' element={<WatchMovie/>}/>
            </Routes>
            <Footer/>
        </div>
    )
};

export default App;