import './Search.css';
import React, { useState } from 'react';
import Nav from './Navigation';

function Search() {
  const [formData, setFormData] = useState({
    keyword: '', // Rename 'query' to 'keyword'
    table: ''
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // make a POST request to your backend endpoint
      const response = await fetch('http://localhost:8000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: formData.keyword,
          table: formData.table,
        }),
      });

      // handle the response, e.g., show a success message
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);

        // Update state with the received data
        setSearchResults(data.rows);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      // handle errors, e.g., show an error message
      console.error('Error:', error);
    }
  };

  return (
    <div className="wrapper">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      <Nav />
      <div className="form">
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="search"
            id="query"
            name="keyword"
            placeholder="Search..."
            value={formData.keyword}
            onChange={handleChange}
          /><br/><br/>
          <input
            type="text"
            id="table"
            name="table"
            placeholder="Table..."
            value={formData.table}
            onChange={handleChange}
          /><br/><br/>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="search-results-container" style={{ marginTop: '278px', marginLeft: '320px'}}>
        <h3>Search Results:</h3>
        <ul>
          {searchResults.map((row, index) => (
            <li key={index}>
              {Object.values(row).join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;