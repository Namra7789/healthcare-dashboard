import React from 'react';
import '../styles/SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." disabled />
        <div className="notification-icon">
          <span>🔔</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;