import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import title from "./title.png";
import Search from './Search';

function Navbar() {
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [name, setName] = useState(localStorage.getItem('name'));

  const handleLogout = () => {
    localStorage.clear();
    setEmail(null); // clear email state after logout
    setName(null); // clear name state after logout
  };

  return (
    <div className="container-fluid">
  <header className="blog-header py-3">
    <div className="row align-items-center">
      <div className="col-sm-4 text-left">
        <Link className="text-muted" to="/login">
          Log-In / Create an Account
        </Link>
      </div>
      <div className="col-sm-4 text-center">
        <Link className="p-2 text-muted" to="/">
          <img src={title} className="img-fluid w-200 h-16" width="125" height="50" alt="logo" />
        </Link>
      </div>
      <div className="col-sm-4 text-right">
        <div className="my-search">
          <Search />
        </div>
      </div>
    </div>
  </header>

  <div className="nav-scroller py-1 mb-2">
    <nav className="nav d-flex justify-content-between">
      <Link className="p-2 text-muted" to="/">
        Home
      </Link>
      <Link className="p-2 text-muted" to="/study">
        Study
      </Link>
      <Link className="p-2 text-muted" to="/news">
        World News
      </Link>
      <Link className="p-2 text-muted" to="/quiz">
        Quiz
      </Link>
      <Link className="p-2 text-muted" to="/profile">
        User Profile & Goals
      </Link>
    </nav>
  </div>
  <hr />
</div>

  );
}

export default Navbar;
