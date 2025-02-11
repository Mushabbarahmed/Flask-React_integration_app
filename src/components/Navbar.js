// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>
//       {/* <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> */}
//       <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link " aria-current="page" href="#">Download</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" aria-current="page" href="#">MACHINE LEARNING  PREDICTION</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">MATHEMATICS</a>
//         </li>
//               </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//     </div>
//   )
// }

// frontend/src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">FlaskReact Intelligence</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/download">Download</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/prediction">Machine Learning Prediction</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mathe">Mathematics</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
