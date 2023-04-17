import React from "react";

const Navbar = () => {
  return ( 
  <>
    <nav className="navbar d-flex m-3 bg-*">
      <div className="container-fluid nav nav-tabs p-1 border-0">
        {/* <a className="navbar-brand  w-25 d-flex " href="#"> */}
          <img src="/logo.png" alt="Logo" width="265" height="80" className="d-inline-block align-text-top"/>
          <li className="nav-item dropdown d-flex">
            <a className="nav-link dropdown-toggle border-white w-75 text-white align-content-center " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M4,12c0-0.899,0.156-1.762,0.431-2.569L6,11l2,2 v2l2,2l1,1v1.931C7.061,19.436,4,16.072,4,12z M18.33,16.873C17.677,16.347,16.687,16,16,16v-1c0-1.104-0.896-2-2-2h-4v-2v-1 c1.104,0,2-0.896,2-2V7h1c1.104,0,2-0.896,2-2V4.589C17.928,5.778,20,8.65,20,12C20,13.835,19.373,15.522,18.33,16.873z"></path></svg>  English </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Sanskrit</a></li>
              <li><a className="dropdown-item" href="#">Spanish</a></li>
              <li><a className="dropdown-item" href="#">French</a></li>
              <li><a className="dropdown-item" href="#">Hindi</a></li>
            </ul>
            <ul className="nav nav-pills justify-content-end ">
              <li className="nav-item ">
                <a className="nav-link bg-danger text-bg-danger" aria-current="page" href="#">Active</a>
              </li>
            </ul>
          </li>
        {/* </a> */}
      </div>
    </nav>
  </>
  );
}
 
export default Navbar;