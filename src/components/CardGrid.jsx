import React from 'react';
import Card from './Card';

const CardGrid = ({ cards, searchQuery, onCardClick, onClearSearch }) => {
  return (
    <div>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
        {searchQuery ? `Результаты поиска: "${searchQuery}"` : 'Рекомендации для вас'}
      </h2>
      {cards.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '8px' }}>
          <p style={{ fontSize: '18px', color: '#999' }}>Ничего не найдено</p>
          <button onClick={onClearSearch} style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#256eeb', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Показать все</button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {cards.map(card => <Card key={card.id} card={card} onClick={onCardClick} />)}
        </div>
      )}
    </div>
  );
};

export default CardGrid;
