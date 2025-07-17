import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import User from "./User";
import UserList from "./UserList";
import UserFetch from "./UserFetch";
import UserDetail from "./UserDetail";
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/user/101">User 101</Link>
        <Link to="/user/102">User 102</Link>
        <Link to="/users">Users</Link>
        <Link to="/user-api">User API</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user-api" element={<UserFetch/>}/>
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

