import React from 'react';
import SearchBar from './SearchBar';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
          <div className="header-left">
          <h1>
              <span className="health-text">Health</span>
              <span className="care-text">care.</span>
            </h1>
          </div>
          <div className="header-search">
            <SearchBar />
          </div>
          <div className="header-right">
            <div className="user-profile">
              <span className="avatar"> 🧔🏻‍♂️ </span>
            </div>
            <button className="add-button">+</button>
          </div>
        </header>
      );
}

export default Header;