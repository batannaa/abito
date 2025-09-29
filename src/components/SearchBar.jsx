import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <section style={{ padding: '30px 0' }}>
      <div style={{ maxWidth: '1170px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{ display: 'flex', backgroundColor: '#256eeb', padding: '3px', borderRadius: '5px' }}>
          <input type="text" placeholder="Поиск по объявлениям" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} style={{ flex: 1, padding: '14px 22px', border: 'none', borderRadius: '5px 0 0 5px', outline: 'none', fontSize: '14px' }} />
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 22px', border: 'none', backgroundColor: '#256eeb', color: 'white', borderRadius: '0 5px 5px 0', cursor: 'pointer' }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <span className="search-text">Найти</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
