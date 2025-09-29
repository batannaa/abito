import React, { useState } from 'react';

const Header = ({ onAddClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{ padding: '20px 0', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '1170px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '24px', fontWeight: '700' }}>
            <div style={{ width: '30px', height: '30px', backgroundColor: '#256eeb', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px' }}>
              ���
            </div>
            <span>Abito</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }} className="header-control">
            <button style={{ padding: '10px 15px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '14px' }}>
              Вход и регистрация
            </button>
            <button onClick={onAddClick} style={{ padding: '10px 15px', borderRadius: '5px', border: 'none', backgroundColor: '#256eeb', color: 'white', cursor: 'pointer', fontSize: '14px' }}>
              Подать объявление
            </button>
          </div>
          <div className="burger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ display: 'none', flexDirection: 'column', gap: '4px', cursor: 'pointer' }}>
            <span style={{ width: '25px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></span>
            <span style={{ width: '25px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></span>
            <span style={{ width: '25px', height: '3px', backgroundColor: '#333', borderRadius: '2px' }}></span>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <button onClick={() => setIsMobileMenuOpen(false)} style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: 'white', cursor: 'pointer' }}>
              Вход и регистрация
            </button>
            <button onClick={() => { onAddClick(); setIsMobileMenuOpen(false); }} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: 'none', backgroundColor: '#256eeb', color: 'white', cursor: 'pointer' }}>
              Подать объявление
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
