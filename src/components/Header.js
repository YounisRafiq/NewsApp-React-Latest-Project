import React from 'react'
import { Link } from 'react-router-dom';
import News from './News.png'
const Header = (props) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 position-fixed top-0 z-1">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold fs-4 text-light" to="/">{props.title}</Link><img style={{width: "30px"}} src={News} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3" >
       <li className="nav-item">
          <Link className="nav-link text-light" to="/home">Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-light" to="/general">General</Link>
        </li> <li className="nav-item">
          <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
        </li> <li className="nav-item">
          <Link className="nav-link text-light" to="/business">Business</Link>
        </li> <li className="nav-item">
          <Link className="nav-link text-light" to="/Sports">Sports</Link>
        </li> <li className="nav-item">
          <Link className="nav-link text-light" to="/health">Health</Link>
        </li> <li className="nav-item">
          <Link className="nav-link text-light" to="/science">Science</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-light" to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
  export default Header;

