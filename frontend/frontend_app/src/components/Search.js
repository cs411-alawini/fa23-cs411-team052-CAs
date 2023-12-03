import React, { useState } from 'react';
import Nav from './Navigation';
import axios from 'axios';
import './Search.css';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            // Replace URL with the Flask server address
            const response = await axios.post('http://localhost:8000/search', { query: searchQuery });
            setSearchResults(response.data.results);
        } catch (error) {
            console.error('Error performing search:', error);
        }
    };

    return (
        <div className="wrapper">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
            <Nav/>
            <div className="form">
                <form id="form" onSubmit={handleSearch}>
                    <input
                        type="search"
                        id="query"
                        name="q"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                {/* Display search results */}
                {searchResults.length > 0 && (
                    <div>
                        <h3>Search Results:</h3>
                        <ul>
                            {searchResults.map((result, index) => (
                                <li key={index}>{result}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;