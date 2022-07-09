import React from 'react';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="p-2">
                  <a className="ml-3 navbar-brand" href="/">Twitter Clone</a>
                </div>
                <div>
                  <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/login">Login</a>
                    <a className="nav-item nav-link" href="/signup">Sign Up</a>
                  </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;