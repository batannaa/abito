import React from 'react';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', gap: '15px' }}>
        <div style={{ fontSize: '24px' }}>{icon}</div>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>{title}</div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
