import React, { useState } from 'react';
import Newsbar from './Newsbar'; // Assuming the Newsbar component is in the same directory

const Nav = () => {
    const [category, setCategory] = useState('general'); // Initial category state
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Call a function to update the Newsbar component with the search query
        // For example:
        // updateNews(searchQuery);
    };

    // Function to update the Newsbar component with the search query
    const updateNews = (query) => {
        // Perform actions to update the Newsbar component with the search query
        // For example, you can set the searchQuery state and let the Newsbar component handle the rest
        setSearchQuery(query);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">News.com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                
                            </li>
                            <li className="nav-item">
                                <form className="d-flex" onSubmit={handleSearchSubmit}>
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/category/general" onClick={() => handleCategoryChange('general')}>General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/category/business" onClick={() => handleCategoryChange('business')}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/category/health" onClick={() => handleCategoryChange('health')}>Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/category/science" onClick={() => handleCategoryChange('science')}>Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/category/sports" onClick={() => handleCategoryChange('sports')}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/category/technology" onClick={() => handleCategoryChange('technology')}>Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Newsbar category={category} searchQuery={searchQuery} /> {/* Pass the selected category and search query to the Newsbar component */}
        </>
    )
}

export default Nav;
