import React from 'react';

const Navbar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="/">Twitter Clone</a>
                <div>
                  <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#">Login</a>
                    <a class="nav-item nav-link" href="/signup">Sign Up</a>
                  </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;