import React from 'react'

// Navbar component that takes setCategory as a prop
const Navbar = ({ setCategory }) => {
    return (
        <div>
            {/* Bootstrap Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* Brand name with a badge */}
                    <a className="navbar-brand" href="#">Your <span className='badge bg-danger text-light fs-4'>Daily</span></a>
                    {/* Toggler button for collapsing navbar on small screens */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Collapsible part of the navbar */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Navigation links with onClick handlers to set category */}
                            {/* <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("general")}>Home</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("technology")}>Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("business")}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("health")}>Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("sports")}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</a>
                            </li>
                        </ul>
                        {/* Search form */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar