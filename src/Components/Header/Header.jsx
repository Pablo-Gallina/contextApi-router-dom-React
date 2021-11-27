import React from 'react'

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <h2 className="navbar-brand">Context App</h2>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="navbar-item">
                    {/* <Link to="/" className="nav-link active">
                        Home
                    </Link> */}
                    Home
                    </li>
                    <li className="navbar-item">
                    {/* <Link to="/about" className="nav-link">
                        About
                    </Link> */}
                    About
                    </li>
                </ul>
                </div>
            </div>
        </nav>   
        </>
    )
}

export default Header