import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import './App.scss';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import {useEffect, useState} from "react";
import ProtectedRoute from "../ProtectedRoute";
import MainApi from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MoviesApi from "../../utils/MoviesApi";
import formatMovie from "../../models/Movie";
import GuestRoute from "../GuestRoute";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [searchString, setSearchString] = useState('');
  const [isShort, setIsShort] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck()
        .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise
          .all([getProfile(), fetchMovies(), fetchSavedMovies()])
          .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  const fetchMovies = () => new Promise((resolve, reject) => {
    const localMovies = localStorage.getItem('movies');
    if (localMovies) {
      const movies = JSON.parse(localMovies);
      setMovies(movies);
      resolve(movies)
    } else {
      MoviesApi
          .getMovies()
          .then(movies => {
            movies = movies.map(m => formatMovie(m));
            setMovies(movies);
            localStorage.setItem('movies', JSON.stringify(movies));
            resolve(movies);
          })
          .catch((err) => reject(err))
    }
  });

  const fetchSavedMovies = () => new Promise((resolve, reject) => {
    const localMovies = localStorage.getItem('saved-movies');
    if (localMovies) {
      const movies = JSON.parse(localMovies);
      setSavedMovies(movies);
      resolve(movies)
    } else {
      MainApi
          .getMovies()
          .then(movies => {
            setSavedMovies(movies);
            localStorage.setItem('saved-movies', JSON.stringify(movies));
            resolve(movies);
          })
          .catch((err) => reject(err))
    }
  });

  const handleTokenCheck = () => new Promise((resolve, reject) => {
    const token = localStorage.getItem('token');
    if (token) {
      MainApi
          .checkToken(token)
          .then(() => {
            setLoggedIn(true);
            resolve();
          })
          .catch((err) => reject(err))
    } else {
      reject();
    }
  });

  const getProfile = () => new Promise((resolve, reject) => {
    MainApi
        .getProfile()
        .then(user => {
          setCurrentUser(user);
          resolve();
        })
        .catch(err => reject(err));
  });

  const login = () => {
    setLoggedIn(true);
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('saved-movies');
    setLoggedIn(false);
    navigate('/', {replace: true});
  }

  const updateUser = user => {
    setCurrentUser(user);
  }

  const handleSaveMovie = (movie) => {
    const savedMovie = savedMovies.find(m => m.movieId === movie.movieId);

    if (savedMovie) {
      MainApi.deleteMovie(savedMovie._id).then(() => {
        const movies = savedMovies.filter(m => m.movieId !== savedMovie.movieId);
        setSavedMovies(movies)
        localStorage.setItem('saved-movies', JSON.stringify(movies));
      })
    } else {
      MainApi.createMovie(movie).then((movie) => {
        const movies = [movie, ...savedMovies];
        setSavedMovies(movies)
        localStorage.setItem('saved-movies', JSON.stringify(movies));
      });
    }
  }

  const handleDeleteMovie = (movie) => {
    MainApi.deleteMovie(movie._id).then(() => {
      const movies = savedMovies.filter(m => m.movieId !== movie.movieId);
      setSavedMovies(movies)
      localStorage.setItem('saved-movies', JSON.stringify(movies));
    })
  }

  const handleSearch = (searchString, isShort) => {

  }

  return isLoading ? '' : (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__wrapper">
          {['/', '/movies', '/saved-movies', '/profile'].includes(location.pathname) ?
              <Header loggedIn={loggedIn}/> : ''}
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/movies" element={<ProtectedRoute element={Movies} loggedIn={loggedIn} movies={movies}
                                                           savedMovies={savedMovies} isLoading={isLoading}
                                                           onSaveMovie={handleSaveMovie} onSearch={handleSearch}/>}/>
            <Route path="/saved-movies"
                   element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} savedMovies={savedMovies}
                                            isLoading={isLoading} onDeleteMovie={handleDeleteMovie}
                                            onSearch={handleSearch}/>}/>
            <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={loggedIn} onLogout={logout}
                                                            onUpdate={updateUser}/>}/>
            <Route path="/signin" element={<GuestRoute element={Login} loggedIn={loggedIn} onLogin={login} />}/>
            <Route path="/signup" element={<GuestRoute element={Register} loggedIn={loggedIn} onLogin={login} />}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          {['/', '/movies', '/saved-movies'].includes(location.pathname) ? <Footer/> : ''}
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
