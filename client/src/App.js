import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Romance from './components/Romance';
import Thriller from './components/Thriller';
import Comedy from './components/Comedy';
import Home from './components/Home';
import Search from './components/Search';
import Card from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link className="nav-list-link" to="/">
                  All Movies
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-link" to="/romance">
                  Romance
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-link" to="/thriller">
                  Thriller
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-link" to="/comedy">
                  Comedy
                </Link>
              </li>
            </ul>
            <Search movies={movies} setMovies={setMovies} />
          </nav>

          <Routes>
            <Route exact path="/romance" element = {<Romance movies={movies} setMovies={setMovies} />} />
            <Route exact path="/thriller" element = {<Thriller movies={movies} setMovies={setMovies} />} />
            <Route exact path="/comedy" element = {<Comedy movies={movies} setMovies={setMovies} />} />
            <Route exact path="/" element = {<Home movies={movies} setMovies={setMovies} />} />
          </Routes>
        </div>
      </Router>
      <Card movies={movies} />
    </div>
  );
}

export default App;
