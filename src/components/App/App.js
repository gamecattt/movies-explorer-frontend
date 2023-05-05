import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import './App.scss';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import {Route, Routes, useLocation} from "react-router-dom";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";

function App() {
  const location = useLocation();

  return (
    <div className="page__wrapper">
      {['/', '/movies', '/saved-movies', '/profile'].includes(location.pathname) ? <Header/> : ''}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {['/', '/movies', '/saved-movies'].includes(location.pathname) ? <Footer/> : ''}
    </div>
  );
}

export default App;
