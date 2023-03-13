import './App.css';
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import UserPage from './components/UserPage/UserPage'
import LoginPage from './components/LoginPage/LoginPage'
import { useState } from 'react';
function App() {

  const [user, setUser] = useState({})

  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">Home</Link>
          |
          <Link to="/about">About</Link>
          |
          <Link to="/login">Login</Link>
          |
          <Link to="/user/4">User</Link>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage></HomePage>} ></Route>
            <Route exact path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route exact path="/user/:id" element={<UserPage></UserPage>}></Route>
          </Routes>

        </main>
      </Router>
    </div>
  );
}

export default App;
