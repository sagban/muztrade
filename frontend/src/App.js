import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Team from './Pages/Team/Team'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img src="/logo.png" height="30"
              className="d-inline-block align-top" alt="" />
                    </a>

          <div className="collapse navbar-collapse" style={{ "justify-content": "flex-end" }}
            id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/sagban/muztrade">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/team' element={<Team />} />
        </Routes>
      </Router>
      <div className="footer">
        <div className="container"><img src="/logo.svg" height="20"
          className="d-inline-block align-top" alt="" />MuzTrade</div>
      </div>
    </div>
  );
}

export default App;
