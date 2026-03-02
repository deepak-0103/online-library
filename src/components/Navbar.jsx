import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">📚 Online Library</h2>

      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Home
        </NavLink>

        <NavLink 
          to="/books" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Browse Books
        </NavLink>

        <NavLink 
          to="/add-book" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Add Book
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;